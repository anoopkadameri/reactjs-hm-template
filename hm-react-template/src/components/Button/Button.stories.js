import React from 'react'   
import Button from './Button'
import Center from '../Center/Center'

export default {
    title: 'Button',
    component: Button,
    decorators: [(story) => <Center>{story()}</Center> ]
}

const Template = args => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary'
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    children: 'Danger'
}

export const Square = Template.bind({})
Square.args = {
    variant: 'square',
    children: 'Square'
}


