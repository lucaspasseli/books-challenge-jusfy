import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.color.gray.dark};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.radius};
  position: relative;
  font-weight: bold;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

export const TipFigure = styled.div`
  background-color: ${({ theme }) => theme.color.gray.dark};
  width: ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.spacing.md};
  position: absolute;
  top: -5px;
  transform: rotate(45deg);
`
