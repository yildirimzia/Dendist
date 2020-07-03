import * as React from 'react';
import {View, Text, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailView from '../views/detail';


const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}

function DetailStack() {
  return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Ana Sayfa" component={HomeScreen} />
    <HomeStack.Screen name="Detail" component={DetailView} />
  </HomeStack.Navigator>
  );
}

export default HomeScreen;