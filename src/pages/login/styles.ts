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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Wrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    max-width: 380px;
    margin-left: 8%;
  }
`
