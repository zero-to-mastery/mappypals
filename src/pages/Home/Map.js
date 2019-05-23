import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import AddFriendForm from './AddFriendForm/AddFriendForm';
import InvitationSent from './AddFriendForm/InvitationSent';
import './Home.css';
const TOKEN =
    'pk.eyJ1Ijoic2Npb3J0aW5vbXJjIiwiYSI6ImNqc2RocmRzYTB2OGUzeWxuZDNmdDhrcDgifQ.txLXHEJPl4lYa8an6fcjuA';
class Map extends Component {
    constructor() {
        super();
        this.state = {
            //  Stored info when user submits AddFriendForm.js
            newFriend: {
                long: null,
                lat: null,
                firstName: '',
                lastName: '',
                email: '',
                country: ''
            },
            //  AddFriendForm visibility
            formDisplay: false,
            // InvitationSendForm:
            InvitationForm: false,

            //temporary "database" Should probably delete it.
            friendsList: {},
            viewport: {
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 11
            },
            // User exact location
            pinMe: {
                latitude: '',
                longitude: ''
            }
        };
    }
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
    }
    newPin = event => {
        this.getLocation(event);
        this.getPostcode();

        // Menu by default is hidden. Clicking on map activates menu.
        this.showFriendForm();
    };
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
                if (data.features[1]) {
                    this.setState({
                        newFriend: {
                            ...this.state.newFriend,
                            country: data.features[1].text
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
    addFriendData = friendState => {
        this.setState(
            {
                newFriend: {
                    ...this.state.newFriend,
                    firstName: friendState.firstname,
                    lastName: friendState.lastname,
                    email: friendState.email
                }
            },
            function() {
                // newFriend state here is immediatelly updated.
                console.log(this.state.newFriend);
            }
        );
        // Hide form after submit.
        this.hideFriendForm();
        // Show Invitation form
        this.showInvitationForm();
    };

    onDragEnd = event => {
        this.getLocation(event);
        console.log('onDragEnd');
        //this.showInviteForm(event);
    };
    // htmlMarkersCollection does not return anything. TODO fix this function.
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
                        className="fas fa-map-marker-alt"
                    />
                </Marker>
            );
        }
        return htmlMarkersCollection;
    };

    showFriendForm = () => this.setState({ formDisplay: true });
    hideFriendForm = () => this.setState({ formDisplay: false });
    showInvitationForm = () => this.setState({ InvitationForm: true });
    hideInvitationForm = () => this.setState({ InvitationForm: false });

    render() {
        // renders only when form is visible.
        let displayForm = '';
        if (this.state.formDisplay) {
            displayForm = (
                <AddFriendForm
                    onFriendLoaded={this.addFriendData}
                    formDisplay={this.state.formDisplay}
                />
            );
        }
        // renders only when InvitationSent is visible
        let InvitationSentVar = '';
        if (this.state.InvitationForm) {
            InvitationSentVar = (
                <InvitationSent
                    InvitationForm={this.state.InvitationForm}
                    hideInvitationForm={this.hideInvitationForm}
                />
            );
        }
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
                            draggable="true"
                            onDragEnd={this.onDragEnd}
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
                {displayForm}
                {InvitationSentVar}
            </div>
        );
    }
}
export default Map;
