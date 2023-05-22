import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { getTeacher } from '../api'
import { Teacher } from '../types'
import useLogin from './useLogin'

interface UseTeacher {
  data: Teacher
  isLoading: boolean
  isError: boolean
}

const useTeacher = (id: string): UseTeacher => {
  const navigate = useNavigate()
  const { getToken } = useLogin()

  const { data, isLoading, isError } = useQuery(`teachers-${id}`, () =>
    fetch(getTeacher(id), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      }
    }).then((response) => {
      if (!response.ok) {
        response.status === 401 && navigate('/login')
        throw new Error(response.statusText)
      }

      return response.json()
    })
  )

  return { data, isLoading, isError }
}

export default useTeacher
