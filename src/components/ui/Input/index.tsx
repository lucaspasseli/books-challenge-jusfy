import { ChangeEvent, FC } from 'react'

import * as S from './styles'

interface InputProps {
  type: 'email' | 'password'
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ label, ...args }) => (
  <S.Container>
    <label>{label}</label>
    <S.Input {...args} />
  </S.Container>
)

export default Input
