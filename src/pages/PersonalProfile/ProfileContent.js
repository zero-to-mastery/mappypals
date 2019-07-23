import React from 'react';
import XButton from '../../components/UI/XButton/XButton';
import styled from 'styled-components';
import './PersonalProfile.styles.css';

const ProfileContentWrapper = styled.div`
    flex-direction: column;
    padding: 0 5rem 0 1rem;
    @media (max-width: 720px) {
        padding-left: 5rem;
    }
`;

class ProfileContent extends React.Component {
    render() {
        return (
            <ProfileContentWrapper>
                <div>
                    <h2 className="text-large color-purple profile-content-title">
                        About me
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque voluptatibus ex corporis deserunt. Consequuntur
                        rem consectetur non iusto, atque quos nesciunt eaque
                        quisquam error, quibusdam impedit, at ratione maiores
                        eum!Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Atque voluptatibus ex corporis deserunt.
                        Consequuntur rem consectetur non iusto, atque quos
                        nesciunt eaque quisquam error, quibusdam impedit, at
                        ratione maiores eum!Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Atque voluptatibus ex
                        corporis deserunt. Consequuntur rem consectetur non
                        iusto, atque quos nesciunt eaque quisquam error,
                        quibusdam impedit, at ratione maiores eum!
                    </p>
                </div>
                <div>
                    <h2 className="text-large color-purple profile-content-title">
                        Interests
                    </h2>
                    {this.props.interests.map((interest, id) => (
                        <XButton key={id} btnType="InterestsTag">
                            {interest}
                        </XButton>
                    ))}
                </div>
            </ProfileContentWrapper>
        );
    }
}

export default ProfileContent;
