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
    align-items: center;
    min-height: 500px;
  }
`

export const EmptyStateContainer = styled.div`
  width: 100%;
`

export const EmptyState = styled.span`
  color: ${({ theme }) => theme.color.alert};
  background-color: ${({ theme }) => theme.color.brown};
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  display: block;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: initial;
  }
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`
