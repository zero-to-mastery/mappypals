import React from 'react';
import Button from '../../components/UI/Button/Button';
import styled from 'styled-components';
import './ProfileCard.css';

const Card = styled.div`
    width: 20%;
    height: 90%;
    text-align: center;
    margin: 2rem 2.5rem;
    @media (max-width: 720px) {
        width: 50%;
        margin: 0 4rem;
        height: auto;
    }
`;

const ProfileCard = ({ id, firstName, lastName, date, location }) => (
    <React.Fragment>
        <Card>
            <div className="profile-photo">
                <img
                    src={`https://robohash.org/${id}?size=80x80`}
                    alt="Profile Avatars"
                />
            </div>
            <div className="user-info">
                <p className="text-large color-purple">{`${firstName} ${lastName}`}</p>
            </div>
            <div className="user-message">
                <Button btnType="ProfileSettingsInterests">
                    <i class="far fa-comment-dots" /> Message
                </Button>
            </div>
            <div className="user-join-date">
                <h2 className="text-large color-purple">Join date:</h2>
                <p className="text-medium">{date}</p>
            </div>
            <div className="user-current-location">
                <h2 className="text-large color-purple">Current location:</h2>
                <p className="text-medium">{location}</p>
            </div>
            <div className="find-user-map">
                <Button btnType="ProfileSettingsInterests">
                    Find me on map
                </Button>
            </div>
        </Card>
    </React.Fragment>
);

export default ProfileCard;
