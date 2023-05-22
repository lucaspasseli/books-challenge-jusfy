import { Dispatch, FC, ReactElement, SetStateAction } from 'react'
import ModalPortal from '../../../utils/ModalPortal'
import Card from '../Card'

import * as S from './styles'

export interface ModalProps {
  isOpen: boolean
  setOn: Dispatch<SetStateAction<boolean>>
  title: string
  children: ReactElement
}

const Modal: FC<ModalProps> = ({ isOpen, setOn, title, children }) => {
  if (!isOpen) return null

  return (
    <ModalPortal>
      <S.BackDrop>
        <S.CloseButton onClick={() => setOn(false)} />
        <S.Container>
          <Card>
            <>{children}</>
          </Card>
        </S.Container>
      </S.BackDrop>
    </ModalPortal>
  )
}

export default Modal
