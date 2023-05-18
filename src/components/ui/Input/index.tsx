import { ChangeEvent, FC } from 'react'
import Button from '../Button'

import * as S from './styles'

interface InputProps {
  type: 'email' | 'password'
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  buttonText?: string
}

const Input: FC<InputProps> = ({ label, buttonText, ...args }) => (
  <S.Container>
    <S.Wrapper>
      <S.Input {...args} />
      {buttonText ? <Button>{buttonText}</Button> : null}
    </S.Wrapper>
  </S.Container>
)

export default Input
