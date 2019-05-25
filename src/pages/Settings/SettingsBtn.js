import React from 'react';

const SettingsBtn = props => {
    const { containerClass, buttonClass, text, disabled } = props;
    return (
        <div className={containerClass}>
            <button className={buttonClass} type="submit" disabled={disabled}>
                {text}
            </button>
        </div>
    );
};

export default SettingsBtn;
