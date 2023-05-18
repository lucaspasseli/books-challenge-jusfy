import { FC } from 'react'

import * as S from './styles'

interface ButtonProps {
  children: string
}

const Button: FC<ButtonProps> = ({ children }) => <S.Button>{children}</S.Button>

export default Button
