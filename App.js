import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EbookScreen from './screens/EbookScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ebook">
        <Stack.Screen 
          name="Ebook" 
          component={EbookScreen} 
          options={{ title: 'Segurança no Trabalho' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
