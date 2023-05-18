import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
