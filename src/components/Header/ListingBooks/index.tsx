import BookCard from '../../BookCard'
import * as S from './styles'

const MOCK_LISTING = [
  { name: 1, type: 'Card' },
  { name: 2, type: 'Card' },
  { name: 3, type: 'Card' }
]

const ListingBooks = () => (
  <S.Container>
    {MOCK_LISTING.map((book, key) => (
      <BookCard {...book} key={key} />
    ))}
  </S.Container>
)

export default ListingBooks
