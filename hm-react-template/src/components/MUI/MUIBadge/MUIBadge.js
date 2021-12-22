import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { Badge } from '@mui/material';
import PropTypes from 'prop-types';

export const MUIBadge = ({variant, color = 'primary', badgeCount = 4}) => {
    return (
        <Badge color= {color}  variant = {variant} badgeContent = {badgeCount} >
            <EmailIcon sx = {{color: 'green'}}/>
        </Badge>
    );
}

MUIBadge.propTypes = {
    variant:  PropTypes.oneOf(['dot', 'standard']),
    color: PropTypes.oneOf(['default','primary','secondary','error','info','success','warning'])
};

MUIBadge.defaultProps = {
    variant:  'dot',
    color: null,
};

