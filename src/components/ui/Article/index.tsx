import { FC } from 'react'

import * as S from './styles'

export interface ArticleProps {
  text: string
}

const Article: FC<ArticleProps> = ({ text }) => (
  <S.Article>
    <S.Quotes />
    {text}
  </S.Article>
)

export default Article
