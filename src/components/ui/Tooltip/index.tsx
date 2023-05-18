import { FC } from 'react'

import * as S from './styles'

export interface TooltipProps {
  text: string
}

const Tooltip: FC<TooltipProps> = ({ text }) => (
  <S.Container>
    <S.TipFigure />
    <span>{text}</span>
  </S.Container>
)

export default Tooltip
