import { FC } from 'react'

import Card from '../ui/Card'

import * as S from './styles'

interface BookCard {
  name: number
  type: string
}

const BookCard: FC<BookCard> = ({ name, type }) => (
  <Card>
    <S.Container>
      {type} - {name}
    </S.Container>
  </Card>
)

export default BookCard
