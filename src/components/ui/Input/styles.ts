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
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  outline: none;
  border: 0;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.none};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
`
