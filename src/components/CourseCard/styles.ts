import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 280px;
  }
`

export const Image = styled.img`
  width: 85px;
  height: 122px;
  background-repeat: no-repeat;
  object-fit: cover;
  image-rendering: crisp-edges;
`

export const Box = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.gray.light};
`

export const Info = styled.div`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.dark};
`
