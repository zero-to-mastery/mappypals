import styled from 'styled-components';
import SearchIcon from '../pics/SearchIcon.svg';


const LineBlock = styled.div`
    z-index: 999;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    margin-left: 100px;
`;

const DropDown = styled.form`
    z-index: 101;
    position: relative;
    top: 100px;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    line-height: 1.75;
    }
    fieldset {
        border: #ffffff;
    }
    .no-friends {
        color: #6831DE;
        padding: 0.5rem;
    }
    
    .friends {
        z-index: 100;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 10px;
        background-color: white;
        border-bottom: 1px solid #6831DE;
        list-style: none;
        margin-top: 0;
        max-height: vh - 150;
        color: grey;
        font-size: 1.2rem;
        overflow-y: no-scroll;
        width: 230px;
    }
    .friend li {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        color: grey;
    }
    img {
        margin-top: 5px;
        margin-right: 10px;
        border-radius: 25px;
        border: 1px solid lightgrey;
      }
    .friend-active,
    .friend li:hover {
        background-color: seashell;
        color: black;
        font-size: 1.3rem;
        font-weight: 400;
    }
    
    .friend li:not(:last-of-type) {
        border-bottom: 1px solid #6831DE;
    }
`;

const SearchStyles = styled.div`
    z-index: 99;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    height: 50px;
    select {
        width: 160px;
        height: 50px;
        font-size: 1.2rem;
        text-indent: 55px;
        background-image: url(${SearchIcon});
        background-size: 50px 50px;
        background-repeat: no-repeat;
        border: none;
        border-radius: 25px 0px 0px 25px;
    }
    input {
        width: 270px;
        height: 30px;
        padding: 10px;
        font-size: 1.2rem;
        text-indent: 17px;
        border: none;
        border-radius: 0px 25px 25px 0px;
    }
    input:focus {
        border-style: none;
        outline: none;
    }
`;

export { DropDown, SearchStyles, LineBlock };
