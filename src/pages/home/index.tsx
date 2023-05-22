import Header from '../../components/Header'
import ListingCourses from '../../components/ListingCourses'
import * as S from './styles'

const Home = () => (
  <S.Container>
    <S.Wrapper>
      <Header />
      <ListingCourses />
    </S.Wrapper>
  </S.Container>
)

export default Home
