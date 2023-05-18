import { Meta, StoryFn } from '@storybook/react'

import Button, { ButtonProps } from './index'

import theme from '../../../styles/theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

const Template: StoryFn<ButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Entrar'
}
