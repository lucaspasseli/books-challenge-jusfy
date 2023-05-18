import { ReactComponent as NextIcon } from '../../../assets/icons/next.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/prev.svg'

import * as S from './styles'

const Pagination = () => (
  <S.Container>
    <PrevIcon />
    <span>Página 1 de 100</span>
    <NextIcon />
  </S.Container>
)

export default Pagination
