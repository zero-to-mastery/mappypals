import React, { Component } from 'react';
import classes from './ProfileSettings.module.css';

import defaultProfilePicture from '../../../pics/blank-profile-picture.png';

import SettingsNavbar from '../SettingsNavbar/SettingsNavbar';
import Button from '../../../components/UI/Button/Button';
import DropdownSelect from '../../../components/UI/DropdownSelect/DropdownSelect';

class ProfileSettings extends Component {
    state = {
        displayUploadError: false,
        displayDuplicateError: false,
        displayEmptyInterestError: false,
        // User inputed interest
        interests: [
            { value: 'volunteering', label: 'Volunteering' },
            { value: 'art', label: 'Art' },
            { value: 'music', label: 'Music' },
            { value: 'traveling', label: 'Traveling' },
            { value: 'tennis', label: 'Tennis' }
        ],
        profileSelected: true,
        changedProfileData: {
            FirstName: '',
            Lastname: '',
            AboutMe: '',
            storeAllInterests: [],
            selectedFile: null
        },
        avatarURI: null
    };

    fileSelectedHandler = e => {
        const string = 'image';
        if (e.target.files && e.target.files[0]) {
            let file = e.target.files[0];
            let svg = file.type.includes('image/svg+xml');
            let gif = file.type.includes('image/gif');
            if (file.type.includes(string) && !svg && !gif) {
                this.hideUploadError();
                let reader = new FileReader();
                reader.onload = ev => {
                    this.setState({
                        changedProfileData: {
                            ...this.state.changedProfileData,
                            selectedFile: file.name
                        },
                        avatarURI: ev.target.result
                    });
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        } else {
            this.displayUploadError();
        }
    };
    // Get submitted value.
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.changedProfileData);
    };

    //update interest array
    handleInterest = newArray => {
        let interests = newArray.map(arr => arr.value);
        this.setState({
            changedProfileData: {
                ...this.state.changedProfileData,
                storeAllInterests: interests
            }
        });
    };

    displayUploadError = () => this.setState({ displayUploadError: true });
    hideUploadError = () => this.setState({ displayUploadError: false });

    // Get input value to object
    handleChangeObject = event => {
        this.setState({
            changedProfileData: {
                ...this.state.changedProfileData,
                [event.target.name]: event.target.value
            }
        });
    };
    // Get input value from items not int the object.
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        // Render only if file format is not supported.
        let uploadError = '';
        if (this.state.displayUploadError) {
            uploadError = <p>This type of file is not supported</p>;
        }

        return (
            <React.Fragment>
                <SettingsNavbar profileSelected={this.state.profileSelected} />
                <form
                    onSubmit={this.handleSubmit}
                    className={classes.container}
                >
                    <div className={classes.pictureItem}>
                        <img
                            src={
                                this.state.avatarURI
                                    ? this.state.avatarURI
                                    : defaultProfilePicture
                            }
                            alt=""
                            className={classes.img}
                        />
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            onChange={this.fileSelectedHandler}
                            ref={fileInput => (this.fileInput = fileInput)}
                        />
                        <div
                            className={classes.changePicture}
                            onClick={() => this.fileInput.click()}
                        >
                            <p>Change picture </p>
                        </div>
                        {uploadError}
                    </div>
                    <div className={classes.form}>
                        <div>
                            <div className={classes.nameContainer}>
                                <div>
                                    <label htmlFor="Firstname">Firstname</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="FirstName"
                                        className={[
                                            classes.input,
                                            classes.u_width_80
                                        ].join(' ')}
                                        onChange={this.handleChangeObject}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="Lastname">Lastname</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="Lastname"
                                        className={[
                                            classes.input,
                                            classes.u_width_80
                                        ].join(' ')}
                                        onChange={this.handleChangeObject}
                                    />
                                </div>
                            </div>
                            <div>
                                <p>About me</p>
                                <textarea
                                    name="AboutMe"
                                    className={[
                                        classes.input,
                                        classes.u_width_80,
                                        classes.inputTextarea
                                    ].join(' ')}
                                    onChange={this.handleChangeObject}
                                />
                            </div>
                            <div>
                                <p>Interests</p>
                                <DropdownSelect
                                    options={this.state.interests}
                                    handleChange={this.handleInterest}
                                />
                            </div>
                            <div className={classes.submitContainer}>
                                <Button
                                    btnType="ProfileSettingsInterests"
                                    type="submit"
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default ProfileSettings;
