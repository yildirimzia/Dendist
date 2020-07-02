import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyTabBar from './components/tab-bar'
import HomeScreen from './views/home';
import ContactScreen from './views/contact';
import AboutScreen from './views/about';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView flex={1} as={SafeAreaView}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Ana Sayfa" tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Hakkimda" component={AboutScreen} />
          <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
          <Tab.Screen name="Iletisim" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
