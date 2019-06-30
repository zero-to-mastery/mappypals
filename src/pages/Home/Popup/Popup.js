import React, { PureComponent } from 'react';
import classes from './Popup.module.css';
class Popup extends PureComponent {
    render() {
        const { info } = this.props;
        console.log(this.props.info.firstName);
        // const displayName = `${info.city}, ${info.state}`;

        return (
            <div>
                <h1 className={classes.red}>{info.firstName}</h1>
            </div>
        );
    }
}

export default Popup;
