import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

export const Text = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.md};
`
