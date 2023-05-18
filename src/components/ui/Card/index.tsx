import { FC, ReactElement } from 'react'

import * as S from './styles'

export interface CardProps {
  children: ReactElement
  onClick?: () => void
}

const Card: FC<CardProps> = ({ onClick, children }) => (
  <S.Container onClick={onClick}>{children}</S.Container>
)

export default Card
