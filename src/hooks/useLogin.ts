import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { Login } from '../types'
import { logIn } from '../api'

const useLogin = () => {
  const navigate = useNavigate()

  const clearToken = () => localStorage.removeItem('login')

  const setToken = (data: { access_token: string }) =>
    localStorage.setItem('login', JSON.stringify(data.access_token))

  const getToken = () => {
    const token = localStorage.getItem('login')?.replace(/"/g, '')

    console.log(token)

    if (!token) {
      navigate('/')
    }

    return token
  }

  const onSuccess = (data: { access_token: string }) => {
    setToken(data)
    navigate('/')
  }

  const { mutate, isLoading, isError } = useMutation(
    (credentials: Login) =>
      fetch(logIn(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }).then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      }),
    {
      onSuccess
    }
  )

  const login = (login: Login) => mutate(login)

  const logout = () => {
    clearToken()
    navigate('/login')
  }

  return { login, logout, isLoading, isError, getToken }
}

export default useLogin
