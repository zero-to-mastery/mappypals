import React from 'react';

const SettingsBtn = props => {
    const { containerClass, buttonClass, text } = props;
    return (
        <div className={containerClass}>
            <button className={buttonClass} type="submit">
            {text}
            </button>
        </div>
    )
}

export default SettingsBtn;