import React from 'react';
import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

export const LetterAvatar = ({ bgcolor, width, height, color, children }) => {
    return (
        <Avatar sx={{ bgcolor, width, height, color }}>{children}</Avatar>
    );
};

LetterAvatar.propTypes = {
    bgcolor:  PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    children: PropTypes.string.isRequired
};

LetterAvatar.defaultProps = {
    bgcolor:  'green',
    width: 50,
    height: 50,
    color: 'red',
};



//export default LetterAvatar;

