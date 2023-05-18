import BookCard from '../BookCard'
import * as S from './styles'
import Pagination from '../ui/Pagination'

const MOCK_LISTING = [
  { name: 1, type: 'Card' },
  { name: 2, type: 'Card' },
  { name: 3, type: 'Card' },
  { name: 3, type: 'Card' },
  { name: 4, type: 'Card' },
  { name: 5, type: 'Card' },
  { name: 6, type: 'Card' },
  { name: 7, type: 'Card' },
  { name: 8, type: 'Card' }
]

const ListingBooks = () => (
  <S.Container>
    {MOCK_LISTING.map((book, key) => (
      <BookCard {...book} key={key} />
    ))}
    <Pagination />
  </S.Container>
)

export default ListingBooks
