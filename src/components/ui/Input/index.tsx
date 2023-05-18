import { ChangeEvent, FC } from 'react'
import Button from '../Button'
import Tooltip from '../Tooltip'

import * as S from './styles'

export interface InputProps {
  type: 'email' | 'password'
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  buttonText?: string
  errorMessage?: string
}

const Input: FC<InputProps> = ({ label, buttonText, errorMessage, ...args }) => (
  <>
    <S.Container>
      <label>{label}</label>
      <S.Wrapper>
        <S.Input {...args} />
        {buttonText ? <Button>{buttonText}</Button> : null}
      </S.Wrapper>
    </S.Container>
    {errorMessage ? <Tooltip text={errorMessage} /> : null}
  </>
)

export default Input
