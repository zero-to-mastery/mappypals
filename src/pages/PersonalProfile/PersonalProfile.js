import React from 'react';
import styled from 'styled-components';
import './PersonalProfile.styles.css';
import ProfileCard from './ProfileCard';
import ProfileContent from './ProfileContent';
import USER_DATA from './USER_DATA';

const Profile = styled.div`
    display: flex;
    @media (max-width: 720px) {
        display: grid;
    }
`;

class PersonalProfile extends React.Component {
    render() {
        const {
            id,
            firstName,
            lastName,
            date,
            location,
            interests
        } = USER_DATA[0];
        return (
            <div className="profile-page">
                <h1 className="color-purple top-title">Friends > Profile</h1>
                <Profile>
                    <ProfileCard
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        date={date}
                        location={location}
                    />
                    <ProfileContent interests={interests} />
                </Profile>
            </div>
        );
    }
}

export default PersonalProfile;
