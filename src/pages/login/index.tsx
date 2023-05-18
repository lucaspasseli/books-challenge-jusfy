import jusfyLogo from '../../assets/images/jusfy-logo.png'
import background from '../../assets/images/background.png'

import * as S from './styles'
import LoginForm from '../../components/LoginForm'

const Login = () => (
  <S.Container image={background}>
    <div>
      <img src={jusfyLogo} alt='Jusfy Logo' width='100' />
    </div>
    <LoginForm />
  </S.Container>
)

export default Login
