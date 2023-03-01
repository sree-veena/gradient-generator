import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  HeadingEl,
  DirectionHeading,
  ButtonContainer,
  ColorHeading,
  ColorInputContainer,
  InputContainer,
  ColorCode,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    gradientColors: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickDirectionItem = direction => {
    this.setState({activeDirection: direction})
  }

  generateGradient = () => {
    const {color1, color2, activeDirection} = this.state
    this.setState({
      gradientColors: `to ${activeDirection}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {color1, color2, gradientColors, activeDirection} = this.state
    return (
      <BgContainer bgImg={gradientColors} data-testid="gradientGenerator">
        <HeadingEl>Generate a CSS Color Gradient</HeadingEl>
        <DirectionHeading>Choose Direction</DirectionHeading>
        <ButtonContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              isActive={activeDirection === each.value}
              clickedDirection={this.onClickDirectionItem}
            />
          ))}
        </ButtonContainer>
        <ColorHeading>Pick the Colors</ColorHeading>
        <ColorInputContainer>
          <InputContainer>
            <ColorCode>{color1}</ColorCode>
            <ColorInput
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
            />
          </InputContainer>
          <InputContainer>
            <ColorCode>{color2}</ColorCode>
            <ColorInput
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
            />
          </InputContainer>
        </ColorInputContainer>
        <GenerateButton onClick={this.generateGradient}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
