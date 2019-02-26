import React , {Component} from 'react';
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import PopUp from "./PopUp.js";
import "./Home.css";
const TOKEN = 'pk.eyJ1Ijoic2Npb3J0aW5vbXJjIiwiYSI6ImNqc2RocmRzYTB2OGUzeWxuZDNmdDhrcDgifQ.txLXHEJPl4lYa8an6fcjuA';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};
class Map extends Component {

  state = {
    pin: {
      long:null, 
      lat: null, 
      name:"John Snow", 
      email: "johnsnow@gmail.com", 
      phone:"0123456789", 
      postcode:"nw145pg"
    },
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 11
    }
  };
  getLocation=(event)=>{
    const lngLat=event.lngLat;
    this.setState({pin:{long:lngLat[0], lat: lngLat[1]}})
  }

  componentDidMount(){
    const getCurrentLocation=window.navigator.geolocation.getCurrentPosition((position)=>{
      if(position.coords.latitude)this.setState({viewport:{...this.state.viewport, latitude: position.coords.latitude, longitude: position.coords.longitude}});
    })
    window.addEventListener("resize", (viewport)=>{
      this.setState({viewport:{...viewport, width: viewport.target.innerWidth, height: viewport.target.innerHeight}})
    })
  }

  render() {
    return (
      <div style={{height:"100vh"}}>
      <MapGL
        {...this.state.viewport}
        onViewportChange={(viewport) =>this.setState({viewport})}
        mapboxApiAccessToken={TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onClick={this.getLocation}
      >
        {
        (this.state.pin.long)?<Marker
          latitude={this.state.pin.lat}
          longitude={this.state.pin.long}
        >
          <i className="fas fa-map-marker-alt"></i>
          <PopUp name={this.state.pin.name} email={this.state.pin.email} phone={this.state.pin.phone} postcode={this.state.pin.postcode}/>
        </Marker>:""
        }

      </MapGL>
      </div>
    );
  }
}
export default Map;