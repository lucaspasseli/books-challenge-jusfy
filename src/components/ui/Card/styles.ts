import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.lg};
  height: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: ${({ theme }) => theme.shadow};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    height: auto;
  }
`
