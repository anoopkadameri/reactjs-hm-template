import React from 'react'; 
import { MUIBadge } from './MUIBadge';

export default {
    title: 'MUI/MUBadge',
    component: MUIBadge,
}

const Template = args => <MUIBadge {...args}/>
export const MUIBadgeDotted = Template.bind({})
MUIBadgeDotted.args = {
    variant: "dot",
    color: 'primary',
    badgeCount: 20
}
