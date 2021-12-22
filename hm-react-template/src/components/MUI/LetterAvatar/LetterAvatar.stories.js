import React from 'react';   
import {LetterAvatar} from './LetterAvatar';

export default {
    title: 'MUI/AvatarLetter',
    component: LetterAvatar,
}

const Template = args => <LetterAvatar {...args}/>

export const AvatarLetter = Template.bind({})

AvatarLetter.args = {
    bgcolor: 'green', 
    width: 56, 
    height: 56, 
    color: 'white',
    children: 'A'
}
