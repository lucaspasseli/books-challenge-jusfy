import styled from 'styled-components'
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg'

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

export const LogOut = styled(LogOutIcon)`
  cursor: pointer;
  &:hover {
    fill: ${({ theme }) => theme.color.white};
  }
`
