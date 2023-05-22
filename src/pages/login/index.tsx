import jusfyLogo from '../../assets/images/jusfy-logo.png'
import background from '../../assets/images/background.png'

import * as S from './styles'
import LoginForm from '../../components/LoginForm'

const Login = () => {
  return (
    <S.Container image={background}>
      <S.Wrapper>
        <div>
          <img src={jusfyLogo} alt='Jusfy Logo' width='100' />
        </div>
        <LoginForm />
      </S.Wrapper>
    </S.Container>
  )
}

export default Login
