import React from 'react';
import searchIcon from '../../pics/SearchIcon.svg';
import styled from 'styled-components'
import './FriendsList.css';


const Input = styled.input`
  width: 220px;
  height: 55px;
  padding-left: 80px;
  color: #979797;
  background: #ffffff;
  border: 1px solid #6831DE;
  border-radius: 30px;
  margin-left: -60px;
`



    class SearchFriends extends React.Component {
      render () {
        return (
          <React.Fragment>
        <div className='friends-search'>
           <img src={searchIcon} /><Input onChange={this.props.onChange} placeholder='...filter friends' type='text'/>
        </div>
    </React.Fragment>
        )
        }
    
    }
    export default SearchFriends;