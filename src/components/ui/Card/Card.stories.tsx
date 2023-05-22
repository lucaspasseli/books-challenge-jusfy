import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'
import Card, { CardProps } from './index'

export default {
  title: 'Components/Card',
  component: Card
} as Meta

const Template: StoryFn<CardProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  children: <div>Content goes heref</div>
}
