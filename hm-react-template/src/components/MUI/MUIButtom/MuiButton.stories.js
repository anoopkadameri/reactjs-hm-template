import React from 'react'   
import Button from '@mui/material/Button';
import {action, actions} from '@storybook/addon-actions'


export default {
    title: 'MUI/MUIButton',
    component: Button,
}

export const Contained = () => <Button onClick= {action('Click handler')} variant ='contained'>Contained</Button>
export const Text = () => <Button {...actions('onClick', 'onMouseOver')} variant ='text'>Text</Button>
export const Outlined = () => <Button variant ='outlined'>Outlined</Button>
export const Disabled = () => <Button variant="contained" disabled>Disabled</Button>
export const Log = () => <Button onClick = {() => console.log('Log button pressed')} variant="contained">Disabled</Button>


const style = {
    gradient: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 6,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      '&:hover': {
        color: 'black',
     }
    },
  };


const Template = args => <Button {...args}/>

export const ContainedArgs = Template.bind({})
ContainedArgs.args = {
    variant: 'contained',
    children: 'ContainedArgs',
}

export const DisabledA  = Template.bind({})
DisabledA.args = {
    variant: 'contained',
    children: 'ContainedA',
    disabled: false
}

export const Gradient  = Template.bind({})
Gradient.args = {
    children: 'Gradient',
    sx: style.gradient,
}



