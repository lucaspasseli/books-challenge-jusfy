import styled from 'styled-components'

export const Container = styled.div`
  padding: 50px 20px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    max-width: 1170px;
  }
`
