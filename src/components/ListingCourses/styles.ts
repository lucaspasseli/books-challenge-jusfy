import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xxlg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`

export const EmptyState = styled.div`
  width: 90vw;
  height: 50vh;
`
