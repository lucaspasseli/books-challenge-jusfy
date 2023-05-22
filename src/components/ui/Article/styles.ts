import styled from 'styled-components'
import { ReactComponent as QuotesIcon } from '../../../assets/icons/quotes.svg'

export const Article = styled.div`
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.fontSize.sm};
`

export const Quotes = styled(QuotesIcon)`
  padding-right: ${({ theme }) => theme.spacing.xsm};
`
