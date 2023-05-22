import styled from 'styled-components'
import { ReactComponent as NextIcon } from '../../../assets/icons/next.svg'
import { ReactComponent as PrevIcon } from '../../../assets/icons/prev.svg'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 22px 0;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    justify-content: end;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const Next = styled(NextIcon)`
  ${({ type, theme }) =>
    type !== 'disable' &&
    `
  cursor: pointer;

  &:hover {
    fill: ${theme.color.white};
  }
`}
`

export const Prev = styled(PrevIcon)`
  ${({ type, theme }) =>
    type !== 'disable' &&
    `
cursor: pointer;

&:hover {
fill: ${theme.color.white};
}
`}
`
