import { FC, ReactElement } from 'react'

import * as S from './styles'

interface CardProps {
  children: ReactElement
}

const Card: FC<CardProps> = ({ children }) => <S.Container>{children}</S.Container>

export default Card
