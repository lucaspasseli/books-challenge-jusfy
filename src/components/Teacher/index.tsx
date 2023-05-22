import useTeacher from '../../hooks/useTeacher'
import * as S from './styles'

const Teacher = ({ id, hasComma = false }: { id: string; hasComma?: boolean }) => {
  const { data } = useTeacher(id)

  return (
    <S.SubTitle>
      {data?.nome} {data?.sobrenome}
      {hasComma ? ',' : null}
    </S.SubTitle>
  )
}

export default Teacher
