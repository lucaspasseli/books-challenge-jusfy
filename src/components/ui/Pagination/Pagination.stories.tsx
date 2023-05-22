import { Meta, StoryFn } from '@storybook/react'
import Pagination, { PaginationProps } from './index'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'

export default {
  title: 'Components/Pagination',
  component: Pagination
} as Meta<PaginationProps>

const Template: StoryFn<PaginationProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Pagination {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  current: 1,
  next: () => {
    console.log('page')
  },
  prev: () => {
    console.log('page')
  },
  isNextBlock: false,
  isPrevBlock: false
}
