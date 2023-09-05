import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoodTracker1 from './Screens/MoodTracker1';
import MoodTracker2 from './Screens/MoodTracker2';
import MyTabs from './BottomTab'

const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="MoodTracker1" component={MoodTracker1} />
        <Stack.Screen name="MoodTracker2" component={MoodTracker2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;