import BookCard from '../BookCard'
import * as S from './styles'
import Pagination from '../ui/Pagination'

const MOCK_LISTING = [
  { name: 1, type: 'Card1' },
  { name: 2, type: 'Card2' },
  { name: 3, type: 'Card3' },
  { name: 4, type: 'Card4' },
  { name: 5, type: 'Card5' },
  { name: 6, type: 'Card6' },
  { name: 7, type: 'Card7' },
  { name: 8, type: 'Card8' }
]

const ListingBooks = () => (
  <>
    <S.Container>
      {MOCK_LISTING.map((book, key) => (
        <BookCard {...book} key={key} />
      ))}
    </S.Container>
    <Pagination />
  </>
)

export default ListingBooks
