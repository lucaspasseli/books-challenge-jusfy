import { StoryFn, Meta } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'
import Tooltip, { TooltipProps } from './index'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as Meta

const Template: StoryFn<TooltipProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Tooltip {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Tooltip text'
}
