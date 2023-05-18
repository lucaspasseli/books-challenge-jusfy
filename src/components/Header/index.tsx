import jusfyLogoBlack from '../../assets/images/jusfy-logo-black.png'
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg'

import useMediaQuery from '../../hooks/useMediaQuery'

import * as S from './styles'

const Header = () => {
  const matches = useMediaQuery('(min-width: 1024px)')

  return (
    <S.Container>
      <img src={jusfyLogoBlack} alt='Jusfy Logo Black' width='70' />
      <S.Wrapper>
        {matches ? (
          <S.Text>
            Bem vindo, <b>Gabriel!</b>
          </S.Text>
        ) : null}
        <LogOutIcon />
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
