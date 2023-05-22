import CourseCard from '../CourseCard'
import * as S from './styles'
import Pagination from '../ui/Pagination'
import useCourses from '../../hooks/useCourse'
import usePagination from '../../hooks/usePagination'
import ReactLoading from 'react-loading'
import theme from '../../styles/theme'

const ListingCourses = () => {
  const pagination = usePagination()

  const { data, isLoading } = useCourses(pagination)

  if (isLoading) {
    return (
      <S.Loading>
        <ReactLoading type='spin' color={theme.color.white} />
      </S.Loading>
    )
  }

  const renderEmptyState = (
    <S.EmptyStateContainer>
      <S.EmptyState>Não possuimos mais cursos no momento. Volte novamente mais tarde!</S.EmptyState>
    </S.EmptyStateContainer>
  )

  const renderListing = data?.length
    ? data?.map((course) => <CourseCard {...course} key={course.id} />)
    : renderEmptyState

  return (
    <>
      <S.Container>{renderListing}</S.Container>
      <Pagination {...pagination} />
    </>
  )
}

export default ListingCourses
