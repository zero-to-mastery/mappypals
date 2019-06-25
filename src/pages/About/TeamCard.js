import React from 'react';
import styled from 'styled-components';
import './About.css';
import ALink from '../../components/UI/LinkTag/LinkTag';
const Card = styled.div`
    background-color: white;
    text-align: center;
    width: 12rem;
    height: auto;
    padding: 1.4rem 0.8rem;
    border-style: solid;
    border-width: 0.5px;
    border-color: lightgrey;
    border-radius: 7.5px;
    box-shadow: 2px 3px 4px -2px grey;

    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 600px) {
        width: 10em;
    }
`;

const TeamCard = ({ id, name, role, location, portfolio, linkedin }) => (
    <React.Fragment>
        <Card>
            <div className="user-photo">
                <img
                    src={`https://robohash.org/${id}?size=80x80`}
                    alt="Team Avatars"
                />
            </div>
            <div className="dev-info">
                <p className="dev-name">{name}</p>
                <p className="dev-role">{role}</p>
            </div>
            <div className="user-links">
                <ALink
                    ALinkType="About"
                    href={portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Portfolio
                </ALink>

                <ALink
                    ALinkType="About"
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </ALink>
            </div>
        </Card>
    </React.Fragment>
);

export default TeamCard;
