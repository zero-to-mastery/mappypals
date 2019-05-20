import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PopUp from './PopUp.js';
import AddFriendForm from './AddFriendForm.js';
import './Home.css';
const TOKEN =
    'pk.eyJ1Ijoic2Npb3J0aW5vbXJjIiwiYSI6ImNqc2RocmRzYTB2OGUzeWxuZDNmdDhrcDgifQ.txLXHEJPl4lYa8an6fcjuA';
class Map extends Component {
    constructor() {
        super();
        this.state = {
            currentPin: {},
            newFriend: {
                long: null,
                lat: null,
                name: '',
                email: '',
                phone: '',
                postcode: '',
                country: '',
                nickname: ''
            },
            //temporary "database"
            friendsList: {},
            viewport: {
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 11
            },
            //user pin
            pinMe: {
                latitude: '',
                longitude: ''
            }
        };
        this.addNewRef = React.createRef();
        this.popUpRef = React.createRef();
    }
    getPostcode = () => {
        fetch(
            'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
                this.state.newFriend.long +
                ',' +
                this.state.newFriend.lat +
                '.json?access_token=' +
                TOKEN
        )
            .then(resp => resp.json())
            .then(data => {
                if (data && data.features[1] && data.features[6]) {
                    this.setState({
                        newFriend: {
                            ...this.state.newFriend,
                            postcode: data.features[1].text,
                            country: data.features[6].text
                        }
                    });
                }
            });
    };
    getLocation = event => {
        const lngLat = event.lngLat;
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                long: lngLat[0],
                lat: lngLat[1]
            }
        });
    };

    showPopup = event => {
        this.setState({ currentPin: this.state.friendsList[event.target.id] });
        setTimeout(() => {
            const popup = document.getElementById('popup');
            if (popup) popup.style.height = '180px';
        }, 500);
    };
    hidePopup = event => {
        const popup = document.getElementById('popup');
        if (this.state.currentPin.long) popup.style.height = '0px';
        this.setState({ currentPin: {} });
    };
    //temporary "database insert"
    nicknameExists = (nickname, email) => {
        const hashListKeys = Object.keys(this.state.friendsList);
        let flag = false;
        console.log({ nickname, email });
        if (!nickname || !nickname.length || hashListKeys.includes(nickname)) {
            this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[0].style.border =
                '2px solid red';
            flag = true;
        } else
            this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[0].style.border =
                '';
        if (!email || !email.length) {
            this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border =
                '2px solid red';
            flag = true;
        } else
            this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border =
                '';
        if (Object.keys(this.state.friendsList) > 0) {
            for (let friend of this.state.friendsList) {
                if (this.state.friendsList[friend].email) {
                    this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border =
                        '2px solid red';
                    flag = true;
                } else
                    this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.children[1].style.border =
                        '';
            }
        }
        return flag;
    };
    addFriendData = friendState => {
        const { nickname, name, email, phone } = friendState.data;
        if (this.nicknameExists(nickname, email)) return;
        const newFriend = {
            ...this.state.newFriend,
            nickname,
            name,
            email,
            phone
        };
        this.setState({ newFriend });
        setTimeout(() => this.addFriendToList(), 1000);
    };
    //temporary add friend - restful api call with db insert while implementing Backend
    addFriendToList = () => {
        const resetNewFriend = {
            long: null,
            lat: null,
            name: '',
            email: '',
            phone: '',
            postcode: '',
            country: '',
            nickname: ''
        };
        this.setState({
            friendsList: {
                ...this.state.friendsList,
                [this.state.newFriend.nickname]: this.state.newFriend
            },
            newFriend: resetNewFriend
        });
        this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.style.height =
            '0px';
        for (let child of this.addNewRef.current._reactInternalFiber.child
            .alternate.stateNode.children) {
            child.value = '';
        }
    };

    newPin = event => {
        this.getLocation(event);
        this.getPostcode();
        this.addNewRef.current._reactInternalFiber.child.alternate.stateNode.style.height =
            '180px';
    };
    closeForm = () => {
        this.setState({ newFriend: { long: null }, currentPin: {} });
        document.getElementById('add-new').style.height = '';
    };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(position => {
            if (position.coords.latitude)
                this.setState({
                    viewport: {
                        ...this.state.viewport,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    pinMe: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                });
        });
        window.addEventListener('resize', viewport => {
            this.setState({
                viewport: {
                    ...this.state.viewport,
                    width: viewport.target.innerWidth,
                    height: viewport.target.innerHeight
                }
            });
        });
        window.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                this.closeForm();
            }
        });
    }
    allPins = () => {
        const htmlMarkersCollection = [];
        const hashList = this.state.friendsList;
        for (let friend in hashList) {
            const { nickname, lat, long } = hashList[friend];
            htmlMarkersCollection.push(
                <Marker key={nickname} latitude={lat} longitude={long}>
                    <i
                        id={nickname}
                        key={nickname + 'k'}
                        onClick={() =>
                            console.log('Here to edit friends details')
                        }
                        onMouseOver={e => this.showPopup(e)}
                        onMouseLeave={e => this.hidePopup(e)}
                        className="fas fa-map-marker-alt"
                    />
                </Marker>
            );
        }
        return htmlMarkersCollection;
    };

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <MapGL
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={TOKEN}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    onClick={this.newPin}
                    width={'auto'}
                    height={'100%'}
                    id="map"
                >
                    {Object.keys(this.state.friendsList).length > 0
                        ? this.allPins()
                        : ''}
                    {this.state.newFriend.long !== null ? (
                        <Marker
                            latitude={this.state.newFriend.lat}
                            longitude={this.state.newFriend.long}
                        >
                            <i id="new-pin" className="fas fa-map-marker-alt" />
                        </Marker>
                    ) : (
                        ''
                    )}
                    {this.state.pinMe.latitude ? (
                        <Marker
                            key="me"
                            latitude={this.state.pinMe.latitude}
                            longitude={this.state.pinMe.longitude}
                        >
                            <i
                                id="me"
                                key="me-pin"
                                className="fas fa-map-marker-alt"
                            />
                        </Marker>
                    ) : (
                        ''
                    )}
                </MapGL>
                {this.state.currentPin.nickname &&
                !this.state.newFriend.long ? (
                    <PopUp
                        nickname={this.state.currentPin.nickname}
                        name={this.state.currentPin.name}
                        email={this.state.currentPin.email}
                        phone={this.state.currentPin.phone}
                        postcode={this.state.currentPin.postcode}
                    />
                ) : (
                    ''
                )}
                {/*this is for now fully visible still being implemented*/}
                <AddFriendForm
                    onFriendLoaded={this.addFriendData}
                    ref={this.addNewRef}
                    closeForm={this.closeForm}
                />
            </div>
        );
    }
}
export default Map;
