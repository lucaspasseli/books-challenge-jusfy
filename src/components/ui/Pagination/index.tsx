import { FC } from 'react'

import useMediaQuery from '../../../hooks/useMediaQuery'

import * as S from './styles'

export interface PaginationProps {
  current: number
  next: () => void
  prev: () => void
  isNextBlock: boolean
  isPrevBlock: boolean
}

const Pagination: FC<PaginationProps> = ({ prev, next, current, isNextBlock, isPrevBlock }) => {
  const matches = useMediaQuery('(min-width: 1024px)')

  const renderDesktop = (
    <>
      <span>Página {current} de 2</span>
      <S.Wrapper>
        <S.Prev onClick={prev} type={isPrevBlock ? 'disable' : ''} />
        <S.Next onClick={next} type={isNextBlock ? 'disable' : ''} />
      </S.Wrapper>
    </>
  )

  const renderMobile = (
    <>
      <S.Prev onClick={prev} type={isPrevBlock ? 'disable' : ''} />
      <span>Página {current} de 2</span>
      <S.Next onClick={next} type={isNextBlock ? 'disable' : ''} />
    </>
  )

  return <S.Container>{matches ? renderDesktop : renderMobile}</S.Container>
}

export default Pagination
