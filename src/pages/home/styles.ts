import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: flex;
    justify-content: center;
  }
`

export const Wrapper = styled.div`
  padding: 50px 20px;
  min-width: 250px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    max-width: 1170px;
    min-width: 950px;
  }
`
