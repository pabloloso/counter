import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const primaryButton = Template.bind({})
primaryButton.args = {
  label: 'Primary button'
}

export const secondaryButton = Template.bind({})
secondaryButton.args = {
  label: 'Secondary button',
  isPrimaryButton: false
}
