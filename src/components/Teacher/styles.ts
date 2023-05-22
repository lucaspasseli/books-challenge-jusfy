import styled from 'styled-components'

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.primary};
  font-weight: lighter;
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.xsm};
`
