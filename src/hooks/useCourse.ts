import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { getCourses } from '../api'
import { Course } from '../types'
import useLogin from './useLogin'

interface useCourseProps {
  current: number
  limit: number
}

interface useCourseResponse {
  data: Course[]
  isLoading: boolean
  isError: boolean
}

const useCourses = ({ current, limit }: useCourseProps): useCourseResponse => {
  const navigate = useNavigate()
  const { getToken } = useLogin()

  const { data, isLoading, isError, refetch } = useQuery('courses', () =>
    fetch(getCourses(current, limit), {
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

  console.log(isError, 'isError')

  useEffect(() => {
    refetch()
  }, [current, limit])

  return { data, isLoading, isError }
}

export default useCourses
