import styled from 'styled-components'
import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'

export const BackDrop = styled.div`
  background-color: ${({ theme }) => theme.opacity.high};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 90%;
  max-width: 880px;
  margin: 0 auto;
`

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
`
