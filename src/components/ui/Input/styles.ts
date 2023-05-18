import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.opacity.medium};
  display: flex;
  flex-direction: column;
  padding: 8px 13px;
  border-radius: ${({ theme }) => theme.border.radius};
  label {
    opacity: 0.3;
    color: ${({ theme }) => theme.color.white};
    font-size: 12px;
  }
`

export const Input = styled.input`
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.color.none};
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
`
