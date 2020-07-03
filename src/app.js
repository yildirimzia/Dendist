import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Box from './components/box';
import MyTabBar from './components/tab-bar';
import HomeScreen from './views/home';
import ContactScreen from './views/contact';
import AboutScreen from './views/about';

import theme from './utils/theme';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box flex={1} as={SafeAreaView}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Ana Sayfa" tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Konum" component={AboutScreen} />
          <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
          <Tab.Screen name="İletisim" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Box>
    </ThemeProvider>
  );
}

export default App;
