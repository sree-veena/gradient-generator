import styled from 'styled-components'

export const ListItem = styled.li`
  min-width: 115px;
  height: 36px;
  width: 49%;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #014f7b;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
