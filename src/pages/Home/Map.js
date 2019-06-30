import React, { Component } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import AddFriendForm from './AddFriendForm/AddFriendForm';
import InvitationSent from './AddFriendForm/InvitationSent';
import './Home.css';
//import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';
import './mapbox-gl-geocoder.css';
import FriendSearch from '../../components/FriendSearch';

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
            // To avoid warning, about using strings.
            draggable: true,
            //  AddFriendForm visibility
            formDisplay: false,
            // InvitationSendForm:
            InvitationForm: false,
            // All stored pins
            inviteFriendData: [],
            DisplayDraggablePin: true,
            // Popup visibility
            showPopup: false,

            viewport: {
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 11
            },
            // User exact location
            pinMe: {
                latitude: '',
                longitude: ''
            },
            searchResultLayer: null
        };
        // Create Unique id.
        this.keyCount = 0;
    }
    /* for the search process - GeoCoder */
    mapRef = React.createRef();

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
    // Create Unique id.
    getKey = () => {
        return this.keyCount++;
    };
    newPin = event => {
        // Allow to pin on the map only when invitation is hidden
        if (!this.state.InvitationForm) {
            this.getLocation(event);
            this.getPostcode();

            // Menu by default is hidden. Clicking on map activates menu.
            this.showFriendForm();
            this.DisplayDraggablePin();
        }
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
                this.storePins();
            }
        );
        // Hide form after submit.
        this.hideFriendForm();
        // Show Invitation form
        this.showInvitationForm();
    };
    // Stores this.state.newFriends values to inviteFriendData array
    storePins = () =>
        this.setState({
            inviteFriendData: [
                ...this.state.inviteFriendData,
                this.state.newFriend
            ]
        });
    displaySelectedPinData = data => {
        console.log(data);
    };
    // Hides invitation Form and draggable pin
    InviteFormX = () => {
        this.hideFriendForm();
        this.removeDraggablePin();
    };

    showFriendForm = () => this.setState({ formDisplay: true });
    hideFriendForm = () => this.setState({ formDisplay: false });
    showInvitationForm = () => this.setState({ InvitationForm: true });
    hideInvitationForm = () => this.setState({ InvitationForm: false });
    // Allows to drag elements.
    onDragEnd = event => this.getLocation(event);

    DisplayDraggablePin = () => this.setState({ DisplayDraggablePin: true });
    removeDraggablePin = () => this.setState({ DisplayDraggablePin: false });

    // Display popup
    showPopup = () => this.setState({ showPopup: true });
    hidePopup = () => this.setState({ showPopup: false });
    /* Search functions BEGIN */
    handleViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    };

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        });
    };

    handleOnResult = event => {
        this.setState({
            searchResultLayer: new GeoJsonLayer({
                id: 'search-result',
                data: event.result.geometry,
                getFillColor: [255, 0, 0, 128],
                getRadius: 1000,
                pointRadiusMinPixels: 10,
                pointRadiusMaxPixels: 10
            })
        });
    };
    /* Search functions END */

    render() {
        // renders only when form is visible and invitation form is not showing.
        let displayForm = '';
        if (this.state.formDisplay && !this.state.InvitationForm) {
            displayForm = (
                <AddFriendForm
                    onFriendLoaded={this.addFriendData}
                    formDisplay={this.state.formDisplay}
                    InviteFormX={this.InviteFormX}
                    removeDraggablePin={this.removeDraggablePin}
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
        // Allows to write showPopup instead of this.state.showPopup.
        const { showPopup } = this.state;

        return (
            <div style={{ height: '100vh' }}>
                <MapGL
                    ref={this.mapRef}
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={TOKEN}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    onClick={this.newPin}
                    width={'auto'}
                    height={'100%'}
                    id="map"
                >
                    {this.state.inviteFriendData.map((data, index) => {
                        return (
                            <React.Fragment>
                                <Marker
                                    latitude={data.lat}
                                    longitude={data.long}
                                    key={'MarkerPermenant ' + this.getKey()}
                                >
                                    <i
                                        id="new-pin"
                                        className="fas fa-map-marker-alt"
                                        onClick={() => this.showPopup()}
                                    />
                                </Marker>
                                {showPopup && (
                                    <Popup
                                        key={'Popup ' + this.getKey()}
                                        latitude={data.lat}
                                        longitude={data.long}
                                        closeButton={true}
                                        closeOnClick={false}
                                        onClose={() =>
                                            this.setState({ showPopup: false })
                                        }
                                        anchor="top"
                                    >
                                        <div>You are here</div>
                                    </Popup>
                                )}
                            </React.Fragment>
                        );
                    })}

                    {this.state.inviteFriendData > 0 ? this.storePins() : ''}
                    {this.state.newFriend.long !== null ? (
                        <Marker
                            draggable={this.state.draggable}
                            onDragEnd={this.onDragEnd}
                            latitude={this.state.newFriend.lat}
                            longitude={this.state.newFriend.long}
                        >
                            <i
                                id="new-pin"
                                className={`${
                                    this.state.DisplayDraggablePin
                                        ? 'fas fa-map-marker-alt'
                                        : ' '
                                }`}
                            />
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
                    <Geocoder
                        mapRef={this.mapRef}
                        onResult={this.handleOnResult}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={TOKEN}
                        position="top-left"
                    />
                    {/* <DeckGL {...this.state.viewport} layers={[this.state.searchResultLayer]} /> */}
                    <FriendSearch
                        containerComponent={this.props.containerComponent}
                        //temp database
                        friends={[
                            {
                                id: 0,
                                firstname: 'AppleVeryLongName',
                                lastname: 'Pearily Along',
                                country: 'Nigeria',
                                interests: 'breathing, climbing, clicking heels'
                            },
                            {
                                id: 1,
                                firstname: 'Pear',
                                lastname: 'Banana',
                                country: 'USA',
                                interests: 'singing, bars, beers'
                            },
                            {
                                id: 2,
                                firstname: 'Banana',
                                lastname: 'Orange',
                                country: 'Slovakia',
                                interests: 'learning, youtube, hiking'
                            },
                            {
                                id: 3,
                                firstname: 'Orange',
                                lastname: 'Kiwi',
                                country: 'Nepal',
                                interests: 'startups, birds, flyfishing'
                            },
                            {
                                id: 4,
                                firstname: 'Kiwi',
                                lastname: 'Grape',
                                country: 'France',
                                interests: 'yoga, holistic health, climbing'
                            },
                            {
                                id: 5,
                                firstname: 'Julie',
                                lastname: 'Grape',
                                country: 'France',
                                interests: 'yoga, holistic health, climbing'
                            }
                        ]}
                    />
                </MapGL>
                {displayForm}
                {InvitationSentVar}
            </div>
        );
    }
}
export default Map;
