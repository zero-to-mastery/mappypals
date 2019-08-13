import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import classes from './DropdownSelect.module.css'

const DropdownSelect = (props) => {
	const animatedComponents = makeAnimated();
	const {options} = props
	return (
		<Select
		closeMenuOnSelect={false}
		components={animatedComponents}
		isMulti
		options={options}
		className={classes.displayInterests}
		theme={theme => ({
			...theme,
			borderRadius: 0,
			colors: {
				...theme.colors,
				primary: '#6831de'
			}
		})}
	/>
	);
};

export default DropdownSelect;