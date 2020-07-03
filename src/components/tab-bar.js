import React from 'react';
import { View } from 'react-native';
import Button from '../components/button';
import {Home, MapPin, Phone} from '../components/icons';
import Box from './box';
import theme from '../utils/theme';

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return label === 'Ana Sayfa' ? (
          <Box p={15} mt={-15} bg="white" borderRadius="full">
            <Button key={label} size={56} bg="red" borderRadius="full" onPress={onPress}>
            <Home stroke="white" />
          </Button>
          </Box>
        ): (
          <Button key={label}  pt={6} flexDirection="column" height={60} flex={1} onPress={onPress}>
           {label === 'Konum' && <MapPin stroke={theme.colors.gray} />}
           {label === 'İletisim' && <Phone stroke={theme.colors.gray} />}
           <Box size={3} bg={isFocused ? 'red' : 'white'} mt={6}/>
          </Button>
        )
      })}
    </View>
  );
}

export default MyTabBar;