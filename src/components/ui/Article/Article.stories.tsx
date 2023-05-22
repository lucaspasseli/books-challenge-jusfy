import { StoryFn, Meta } from '@storybook/react'
import Article, { ArticleProps } from './index'
import { ThemeProvider } from 'styled-components'
import theme from '../../../styles/theme'

export default {
  title: 'Components/Article',
  component: Article
} as Meta

const Template: StoryFn<ArticleProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Article {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis purus id lacinia ullamcorper. Fusce tristique nisi a neque cursus consequat.'
}
