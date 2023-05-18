import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'
import Input, { InputProps } from './index'

export default {
  title: 'Components/Input',
  component: Input
} as Meta

const Template: StoryFn<InputProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Input {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  type: 'email',
  label: 'Email',
  value: '',
  onChange: () => {
    console.log('change')
  }
}

export const WithButton = Template.bind({})
WithButton.args = {
  type: 'password',
  label: 'Password',
  value: '',
  onChange: () => {
    console.log('change')
  },
  buttonText: 'Submit'
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  type: 'email',
  label: 'Email',
  value: '',
  onChange: () => {
    console.log('change')
  },
  errorMessage: 'Invalid email'
}
