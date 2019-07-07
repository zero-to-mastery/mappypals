const IsPasswordValid = password => {
    // Validation: https://stackoverflow.com/questions/18367258/validation-for-password-is-at-least-6-characters
    if (!password || password.length < 6) {
        return false;
    }
    // check for a number
    if (/[0-9]/.test(password) === false) {
        return false;
    }
    // check for a capital letter
    if (/[A-Z]/.test(password) === false) {
        return false;
    }
    // check for a lowercase letter
    if (/[a-z]/.test(password) === false) {
        return false;
    }
    // all requirements have been satisfied
    return true;
};

const IsPasswordIdentical = (password, confirmPassword) => {
    if (password === confirmPassword) {
        return true;
    }
    return false;
};
export { IsPasswordValid, IsPasswordIdentical };
