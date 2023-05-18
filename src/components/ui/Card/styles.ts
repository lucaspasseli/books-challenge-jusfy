import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.color.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  margin: 10px 0;
`
