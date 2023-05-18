import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalPortalProps {
  children: ReactNode
}

const MODAL_ROOT = document.getElementById('modal')

const ModalPortal: FC<ModalPortalProps> = ({ children }) => {
  if (MODAL_ROOT) {
    return createPortal(children, MODAL_ROOT)
  }

  return null
}

export default ModalPortal
