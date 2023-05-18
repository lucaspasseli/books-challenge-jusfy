import { ChangeEvent, useState } from 'react'
import Input from '../ui/Input'
import * as S from './styles'

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, type } = e.target

    setLogin((prev) => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <S.Container>
      <Input type='email' label='Email' value={login.email} onChange={handleInput} />
      <Input
        type='password'
        label='Senha'
        value={login.password}
        onChange={handleInput}
        buttonText='Enviar'
        errorMessage='Email e/ou senha incorretos.'
      />
    </S.Container>
  )
}

export default LoginForm
