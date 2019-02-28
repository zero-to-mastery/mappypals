import React , {Component} from 'react';
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import PopUp from "./PopUp.js";
import AddFriendForm from "./AddFriendForm.js"
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
    newFriend: {
      long:null, 
      lat: null, 
      name:"", 
      email: "", 
      phone:"", 
      postcode:"",
      country:"",
      nickname:""
    },
    //temporary "database"
    friendsList: [],
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 11
    }
  };
  getPostcode=()=>{
    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+this.state.newFriend.long+","+this.state.newFriend.lat+".json?access_token="+TOKEN)
    .then(resp=>resp.json())
    .then(data=>this.setState({newFriend:{...this.state.newFriend, postcode:data.features[1].text, country: data.features[6].text}}))
  }
  getLocation=(event)=>{
    const lngLat=event.lngLat;
    this.setState({newFriend:{...this.state.newFriend, long:lngLat[0], lat: lngLat[1]}})
  }
  
  showPopup=()=>{
    const popup=document.getElementById("popup");
    popup.style.height="180px";
    popup.style.display="flex"
  }
  hidePopup=()=>{
  const popup=document.getElementById("popup");
  popup.style.height="0px"
  popup.style.display="none"
}
//temporary "database insert"
  addFriendData=(friendState)=>{
    const {nickname, name, email, phone}=friendState.data
    this.setState({newFriend: {...this.state.newFriend, nickname, name, email, phone}})
    setTimeout(()=>this.addFriendToList(),1000);
  }
//temporary add friend - restful api call with db insert while implementing Backend
  addFriendToList=()=>{
   console.log(this.state.newFriend)
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
    console.log(this.state)
    return (
      <div style={{height:"100vh"}}>
      <MapGL
        {...this.state.viewport}
        onViewportChange={(viewport) =>this.setState({viewport})}
        mapboxApiAccessToken={TOKEN}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onClick={(e)=>{this.getLocation(e); this.getPostcode() }}
      >
        {
        (this.state.newFriend.long)?<Marker
          latitude={this.state.newFriend.lat}
          longitude={this.state.newFriend.long}
        >
          <i onMouseOver={this.showPopup} onMouseLeave={this.hidePopup} className="fas fa-map-marker-alt"></i>
        </Marker>:""
        }

      </MapGL>
      <PopUp name={this.state.newFriend.name} email={this.state.newFriend.email} phone={this.state.newFriend.phone} postcode={this.state.newFriend.postcode}/>
      {/*this is for now fully visible still being implemented*/}
      <AddFriendForm onFriendLoaded={this.addFriendData}/>
      </div>
    );
  }
}
export default Map;