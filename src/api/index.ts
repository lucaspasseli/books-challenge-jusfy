const API_REST_PATH = 'https://jusfy-desafio-tecnico.herokuapp.com'

export const logIn = () => `${API_REST_PATH}/auth/login`

export const getCourses = (current: number, limit: number) =>
  `${API_REST_PATH}/cursos?_page=${current}&_limit=${limit}`

export const getTeacher = (id: string) => `${API_REST_PATH}/professores/${id}`
