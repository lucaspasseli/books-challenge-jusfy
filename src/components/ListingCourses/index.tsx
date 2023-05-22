import CourseCard from '../CourseCard'
import * as S from './styles'
import Pagination from '../ui/Pagination'
import useCourses from '../../hooks/useCourse'
import usePagination from '../../hooks/usePagination'

const ListingCourses = () => {
  const pagination = usePagination()

  const { data, isLoading } = useCourses(pagination)

  if (isLoading) {
    return <S.EmptyState>...carregando...</S.EmptyState>
  }

  const renderListing = data?.length ? (
    data?.map((course) => <CourseCard {...course} />)
  ) : (
    <S.EmptyState>Não há cursos nesta página</S.EmptyState>
  )

  return (
    <>
      <S.Container>{renderListing}</S.Container>
      <Pagination {...pagination} />
    </>
  )
}

export default ListingCourses
