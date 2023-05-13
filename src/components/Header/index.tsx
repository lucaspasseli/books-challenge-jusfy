import jusfyLogoBlack from '../../assets/images/jusfy-logo-black.png'
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg'

import * as S from './styles'

const Header = () => (
  <S.Container>
    <img src={jusfyLogoBlack} alt='Jusfy Logo Black' width='70' />
    <LogOutIcon />
  </S.Container>
)

export default Header
