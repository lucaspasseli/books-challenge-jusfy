import { FC, MouseEventHandler } from 'react'

import * as S from './styles'

export interface ButtonProps {
  children: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <S.Button onClick={onClick}>{children}</S.Button>
)

export default Button
