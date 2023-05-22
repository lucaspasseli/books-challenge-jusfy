import { FC, useState } from 'react'
import { Course } from '../../types'
import { convertMinutesToHoursAndMinutes } from '../../utils'
import DetailsModalContent from '../DetailsModalContent'
import Teacher from '../Teacher'

import Card from '../ui/Card'
import Modal from '../ui/Modal'

import * as S from './styles'

const CourseCard: FC<Course> = ({
  id,
  capa,
  titulo,
  professores,
  informacoes,
  informacoes: { duracao, responsavel, publicacao },
  sinopse,
  numeracao,
  codigo
}) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  return (
    <>
      <S.Container>
        <Card onClick={() => setIsDetailModalOpen(true)}>
          <S.Box>
            <S.Image src={capa} alt={titulo} />
            <S.Wrapper>
              <S.Info>
                <S.Title>{titulo}</S.Title>
                {professores?.map((teacher) => (
                  <Teacher id={teacher} />
                ))}
              </S.Info>

              <S.Info>
                <span>{convertMinutesToHoursAndMinutes(Number(duracao))}</span>
                <span>{responsavel}</span>
                <span>Publicado em {publicacao}</span>
              </S.Info>
            </S.Wrapper>
          </S.Box>
        </Card>
      </S.Container>
      <Modal isOpen={isDetailModalOpen} setOn={setIsDetailModalOpen} title={titulo}>
        <DetailsModalContent
          {...{ id, capa, titulo, professores, informacoes, sinopse, numeracao, codigo }}
        />
      </Modal>
    </>
  )
}

export default CourseCard
