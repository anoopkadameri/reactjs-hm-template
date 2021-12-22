import React from 'react';   
import MUIInput from './MUIInput';

export default {
    title: 'MUI/MUIInput',
    component: MUIInput,
}

const Template = args => <MUIInput {...args}/>
export const Standard = Template.bind({})
Standard.args = {
    id: 'standard-basic',
    label: 'Standard',
    variant: 'standard',
}

export const OutLined = Template.bind({})
OutLined.args = {
    id: 'outlined-basic',
    label: 'Outlined',
    variant: 'outlined',
}

export const Filled = Template.bind({})
Filled.args = {
    id: 'filled-basic',
    label: 'Filled',
    variant: 'filled',
}

