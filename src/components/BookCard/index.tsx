import { FC, useState } from 'react'

import Card from '../ui/Card'
import Modal from '../ui/Modal'

import * as S from './styles'

interface BookCard {
  name: number
  type: string
}

const BookCard: FC<BookCard> = ({ name, type }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  return (
    <>
      <Card onClick={() => setIsDetailModalOpen(true)}>
        <S.Container>
          {type} - {name}
        </S.Container>
      </Card>
      <Modal isOpen={isDetailModalOpen} setOn={setIsDetailModalOpen} title={type}>
        <div>test</div>
      </Modal>
    </>
  )
}

export default BookCard
