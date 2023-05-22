import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Modal, { ModalProps } from './index'
import theme from '../../../styles/theme'

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ThemeProvider theme={theme}>
        <Modal {...args} isOpen={isOpen} setOn={setIsOpen} />
      </ThemeProvider>
      <div id='modal'></div>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Modal Title',
  children: <div>Modal Content</div>
}
