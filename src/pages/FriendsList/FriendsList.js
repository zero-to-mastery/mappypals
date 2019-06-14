import React from 'react'
import Layout from '../../components/Layout'
import friends from './friends-data'
import FriendCard from './FriendCard';
import SearchFriends from './SearchFriends';
import styled from 'styled-components'; 

const FriendsLayout = styled.div`
  width: calc(100vw - 300px);
  background: #fff;
`

const FriendsPageList = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-rows: auto auto;
`
const FriendsTopBar = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
`

const FriendCardGrid =  styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap
  justify-content: flex-start;
  align-items: center;
  margin: auto;
`


class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends
    };

    this.handleChange = this.handleChange.bind(this);
}


handleChange(e) {
  // Variable to hold the original version of the list
let currentList = friends;
  // Variable to hold the filtered list before putting into state
let newList = [];

  // If the search bar isn't empty
if (e.target.value !== "") {
      // Assign the original list to currentList
//currentList = friends;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
newList = currentList.filter(item => {
          // change current item to lowercase
  const lc = item.name.toLowerCase();
          // change search term to lowercase
  const filter = e.target.value.toLowerCase();
          // check to see if the current list item includes the search term
          // If it does, it will be added to newList. Using lowercase eliminates
          // issues with capitalization in search terms and search content
          
          
  return lc.includes(filter);
});
} else {
      // If the search bar is empty, set newList to original task list
newList = friends;
}
  // Set the filtered state based on what our rules added to newList
this.setState({
friends: newList
});
}


  render () {
    return(
    <FriendsLayout>
      <FriendsTopBar>
          <h1>Friends</h1>
          <SearchFriends onChange={this.handleChange}></SearchFriends>
        </FriendsTopBar>
      <FriendsPageList>
        
        <FriendCardGrid>
        {this.state.friends.map((item, id ) => {
            return( 
              <FriendCard  
                key= {id}
                name={item.name}
              /> 
            )
            }
          )}
        </FriendCardGrid>
      </FriendsPageList>
    </FriendsLayout>
    );
}
}
export default FriendsList;