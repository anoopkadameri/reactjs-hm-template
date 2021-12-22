import { Slider } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const MUISlider = ({size, color, min, max}) => {
    return (
        <Slider
            size= {size}
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            min = {min}
            max = {max}
            sx = {{color: color}}
            onChange = {(event) => console.log(`Value is ${event.target.value}`)}
        />
    );
}

MUISlider.propTypes = {
    size:  PropTypes.oneOf(['small', 'medium']),
    color: PropTypes.string
};

MUISlider.defaultProps = {
    size:  'medium',
    color: null,
    min: 0,
    max: 10
};

