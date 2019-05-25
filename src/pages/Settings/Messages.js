import React from 'react';

// depending on success or failure of
// PUT/PATCH request to server when changing
// password/email these will inform user of success/failure
// this logic can be written in individual components
// just here for now for clarity can remain or not

export const errorMessage = props => {
    const message = { props };
    return <div>{message}</div>;
};

export const successMessage = props => {
    const message = { props };
    return <div>{message}</div>;
};
