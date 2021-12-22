import React from 'react'; 
import {MUISlider} from './MUISlider';

export default {
    title: 'MUI/MUISlider',
    component: MUISlider,
}

const Template = args => <MUISlider {...args}/>
export const MSlider = Template.bind({})
MSlider.args = {
    size : 'small',
    color: 'green',
    min: 0,
    max: 100
}

