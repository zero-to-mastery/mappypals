import React from 'react';
import "./Home.css";

class AddFriendForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          data: this.props.edit === true ? this.props.data : {}
      }
      this.anythingChanges.bind(this.anythingChanges);
    }

    anythingChanges=(event)=> {
        this.setState({data:{...this.state.data, [event.target.id]: event.target.value}})
    }

    render() {
        return(
            <div id="add-new">
                <button className="close-btn" onClick={(e)=> this.props.onCloseClick()}>x</button>
                <input type="text" onChange={(e)=>this.anythingChanges(e)} value={this.state.data.nickname} placeholder="Nickname" id="nickname" required/>
                <input type="email" onChange={(e)=>this.anythingChanges(e)} value={this.state.data.email} placeholder="Email address" id="email" required/>
                <input type="text" onChange={(e)=>this.anythingChanges(e)} value={this.state.data.name} placeholder="Full Namer" id="name" />
                <input type="tel" onChange={(e)=>this.anythingChanges(e)} value={this.state.data.phone} placeholder="Phone Number" id="phone" />
                <input type="button" value="Add Friend" id="add" onClick={()=>{this.props.onFriendLoaded(this.state)}} />
            </div>
        )
    }
}

export default AddFriendForm;