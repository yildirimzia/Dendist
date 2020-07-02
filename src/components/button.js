import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { compose, color, size, space, flexbox } from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(
    flexbox,
    space,
    color,
    size,
  )
)

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}

export default Button;