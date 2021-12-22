import { Grid } from '@mui/material';
import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const Content = (props) => {
    return (
        <Grid container spacing = {2}>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
            <Grid item xs= {12} sm= {6} md = {4} lg = {3}> 
             <ProductItem />
            </Grid>
        </Grid>
    );
}

export default Content;