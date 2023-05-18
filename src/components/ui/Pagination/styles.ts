import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  margin: 22px 0;

  @media only screen and (min-width: 1024px) {
    justify-content: end;
    gap: 16px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`
