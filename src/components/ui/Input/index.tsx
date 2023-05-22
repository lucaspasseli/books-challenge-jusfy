import { ChangeEvent, FC, MouseEventHandler } from 'react'
import Button from '../Button'
import Tooltip from '../Tooltip'

import * as S from './styles'

export interface InputProps {
  type: 'email' | 'password'
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: MouseEventHandler<HTMLButtonElement>
  buttonText?: string
  hasError?: boolean
  errorMessage?: string
}

const Input: FC<InputProps> = ({
  label,
  buttonText,
  hasError = false,
  errorMessage,
  onClick,
  ...args
}) => (
  <>
    <S.Container>
      <label>{label}</label>
      <S.Wrapper>
        <S.Input {...args} />
        {buttonText && onClick ? <Button onClick={onClick}>{buttonText}</Button> : null}
      </S.Wrapper>
    </S.Container>
    {hasError && errorMessage ? <Tooltip text={errorMessage} /> : null}
  </>
)

export default Input
