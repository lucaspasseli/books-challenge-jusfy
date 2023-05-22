import { FC } from 'react'
import { ReactComponent as NextIcon } from '../../../assets/icons/next.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/prev.svg'

import useMediaQuery from '../../../hooks/useMediaQuery'

import * as S from './styles'

export interface PaginationProps {
  current: number
  next: () => void
  prev: () => void
  isNextBlock: boolean
  isPrevBlock: boolean
}

const Pagination: FC<PaginationProps> = ({ prev, next, isNextBlock, isPrevBlock, current }) => {
  const matches = useMediaQuery('(min-width: 1024px)')

  const renderDesktop = (
    <>
      <span>Página {current} de 2</span>
      <S.Wrapper>
        <PrevIcon onClick={prev} />
        <NextIcon onClick={next} />
      </S.Wrapper>
    </>
  )

  const renderMobile = (
    <>
      <PrevIcon onClick={prev} />
      <span>Página {current} de 2</span>
      <NextIcon onClick={next} />
    </>
  )

  return <S.Container>{matches ? renderDesktop : renderMobile}</S.Container>
}

export default Pagination
