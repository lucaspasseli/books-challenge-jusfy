export type Login = {
  email: string
  password: string
}

export type Course = {
  capa: string
  codigo: string
  id: string
  numeracao: string
  sinopse: string
  titulo: string
  professores: string[]
  informacoes: CourseDetails
}

export type CourseDetails = {
  duracao: string
  certificado: boolean
  idioma: string
  publicacao: string
  responsavel: string
}

export type Teacher = {
  id: string
  nome: string
  sobrenome: string
}
