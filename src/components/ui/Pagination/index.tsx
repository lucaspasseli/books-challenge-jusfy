import { ReactComponent as NextIcon } from '../../../assets/icons/next.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/prev.svg'

import useMediaQuery from '../../../hooks/useMediaQuery'

import * as S from './styles'

const Pagination = () => {
  const matches = useMediaQuery('(min-width: 1024px)')

  const renderDesktop = (
    <>
      <span>Página 1 de 100</span>
      <S.Wrapper>
        <PrevIcon />
        <NextIcon />
      </S.Wrapper>
    </>
  )

  const renderMobile = (
    <>
      <PrevIcon />
      <span>Página 1 de 100</span>
      <NextIcon />
    </>
  )

  console.log(matches, 'test media')

  return <S.Container>{matches ? renderDesktop : renderMobile}</S.Container>
}

export default Pagination
