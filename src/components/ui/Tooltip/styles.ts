import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.white};
  padding: 16px;
  border-radius: ${({ theme }) => theme.border.radius};
  position: relative;
  font-weight: bold;
  margin-top: 8px;
`

export const TipFigure = styled.div`
  background-color: ${({ theme }) => theme.color.gray};
  width: 16px;
  height: 16px;
  position: absolute;
  top: -5px;
  transform: rotate(45deg);
`
