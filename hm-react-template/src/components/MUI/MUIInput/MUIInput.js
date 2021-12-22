import React from 'react';
import { TextField } from '@mui/material';

function MUIInput({ variant, label, ...rest}) {
    return (
        <TextField label= {label} variant={variant} {...rest} />
    );
}

export default MUIInput;

