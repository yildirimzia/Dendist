import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Box from './components/box';
import MyTabBar from './components/tab-bar';
import HomeScreen from './views/home';
import ContactScreen from './views/contact';
import AboutScreen from './views/about';
import DetailView from './views/detail';

import theme from './utils/theme';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator()



function DetailStack() {
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Detail" component={DetailView} />
  </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box flex={1} as={SafeAreaView}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Ana Sayfa" tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Konum" component={AboutScreen} />
          <Tab.Screen name="Ana Sayfa" component={DetailStack} />
          <Tab.Screen name="İletisim" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Box>
    </ThemeProvider>
  );
}

export default App;
