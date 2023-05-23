import styled from 'styled-components'

interface BackgroundImageProps {
  image: string
}

export const Container = styled.div<BackgroundImageProps>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right 43%;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled.div`
  padding: 0 10px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    max-width: 380px;
    margin-left: 8%;
  }
`
