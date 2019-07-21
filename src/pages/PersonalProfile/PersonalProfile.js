import React from 'react';
import styled from 'styled-components';
import './PersonalProfile.css';
import ProfileCard from './ProfileCard';
import ProfileContent from './ProfileContent';
import USER_DATA from './USER_DATA';

const Profile = styled.div`
    display: flex;
    width: 80vw;
    height: 100vh;
    @media (max-width: 720px) {
        display: grid;
        width: 100vw;
    }
`;

class PersonalProfile extends React.Component {
    render() {
        const { id, firstName, lastName, date, location } = USER_DATA[0];
        return (
            <div className="profile-page">
                <h1 className="profile-title">Friends > Profile</h1>
                <Profile>
                    <ProfileCard
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        date={date}
                        location={location}
                    />
                    <ProfileContent />
                </Profile>
            </div>
        );
    }
}

export default PersonalProfile;
