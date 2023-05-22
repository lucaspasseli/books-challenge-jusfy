import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xlg};
  max-height: 75vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    max-width: 4px;
    height: 48px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    border-radius: 30px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    height: initial;
    max-width: auto;
    overflow: hidden;
    align-items: flex-start;
    flex-direction: row;
    gap: 0;
    padding: 48px 16px;
  }
`

export const Image = styled.img`
  width: calc(100% - 20px);
  background-repeat: no-repeat;
  object-fit: cover;
  max-height: 50%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    width: 50%;
    height: 600px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  height: 100%;
  text-align: left;
  padding: 0 10px;
  max-height: 400px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    height: initial;

    padding: 0 48px;
    max-height: 600px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      max-width: ${({ theme }) => theme.spacing.xsm};
      height: 48px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.color.primary};
      border-radius: 30px;
    }
  }
`

export const Info = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlg};
  color: ${({ theme }) => theme.color.gray.light};
`

export const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
`

export const List = styled.ul`
  margin: 0;
  gap: ${({ theme }) => theme.spacing.xsm};
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.li`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.dark};

  b {
    color: ${({ theme }) => theme.color.black};
  }
`
