import { ChangeEvent, useState } from 'react'
import Input from '../ui/Input'
import * as S from './styles'

import useLogin from '../../hooks/useLogin'

const LoginForm = () => {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  })

  const { email, password } = userLogin

  const { login, isError, isLoading } = useLogin()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target

    setUserLogin((prev) => ({
      ...prev,
      [type]: value
    }))
  }

  const onLogin = () => login({ email, password })

  console.log(isError, 'IS ERROR TESdT')

  return (
    <S.Container>
      <Input type='email' label='Email' value={userLogin.email} onChange={handleInput} />
      <Input
        type='password'
        label='Senha'
        value={userLogin.password}
        onChange={handleInput}
        onClick={onLogin}
        buttonText='Enviar'
        hasError={isError}
        errorMessage='Email e/ou senha incorretos.'
      />
    </S.Container>
  )
}

export default LoginForm
