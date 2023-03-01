// Write your code here
import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActive, clickedDirection} = props
  const {displayText, value} = details

  const changeDirection = () => {
    clickedDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton isActive={isActive} onClick={changeDirection}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
