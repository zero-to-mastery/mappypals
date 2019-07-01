import React, { PureComponent } from 'react';
import classes from './Popup.module.css';
import Image from '../../../pics/default-profile-pic.jpg';
class Popup extends PureComponent {
    render() {
        const { info } = this.props;
        console.log(this.props.info.firstName);
        // const displayName = `${info.city}, ${info.state}`;

        return (
            <React.Fragment>
                <div className={classes.container}>
                    <div>
                        <img src={Image} className={classes.img} alt="" />
                        <p className={classes.fullName}>
                            {info.firstName} {info.lastName}
                        </p>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button className={classes.button}>
                            <i className={`${classes.icon} far fa-user`} />
                            Profile
                        </button>
                        <button className={classes.button}>
                            <i
                                className={`${
                                    classes.icon
                                } far fa-comment-dots`}
                            />
                            Message
                        </button>
                    </div>
                </div>
                <p className={classes.description}>This is description</p>
            </React.Fragment>
        );
    }
}

export default Popup;
