import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalPortalProps {
  children: ReactNode
}

const ModalPortal: FC<ModalPortalProps> = ({ children }) => {
  const MODAL_ROOT = document.getElementById('modal')

  if (MODAL_ROOT) {
    return createPortal(children, MODAL_ROOT)
  }

  return null
}

export default ModalPortal
