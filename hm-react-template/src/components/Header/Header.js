import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AcUnit } from '@mui/icons-material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Avatar } from '@mui/material';


const Header = (props) => {
    return (
        <AppBar position='fixed' sx= {{bgcolor: 'black'}}>
            <Toolbar>
                <AllInclusiveIcon sx = {{width: 60, height: 60}}/>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, ml: 2 }}>
                    Grid Demo
                </Typography>
                <Avatar sx={{  ml: 4 }}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;