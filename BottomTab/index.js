import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Dashboard from '../Screens/Dashboard';
import MoodTracker2 from '../Screens/MoodTracker2';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            activeTintColor: '#3C3C4399',
            inactiveTintColor: '#3C3C4399',
            style: {
                height: 80, // Set the height of the tab bar here
            }
        }}  >

            <Tab.Screen name="Careteam" component={Dashboard}
                options={{
                    tabBarLabel: 'Careteam',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/users.jpg')} color={color} size={size} /> // Replace with the icon you want to use
                    ),
                    tabBarActiveTintColor: '#000000'
                }}
            />

            <Tab.Screen name="Task" component={MoodTracker2}
                options={{
                    tabBarLabel: 'Tasks',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/add.jpg')} color={color} size={size} /> // Replace with the icon you want to use
                    ),
                    tabBarActiveTintColor: '#000000'
                }} />

            <Tab.Screen name="Home" component={Dashboard}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/home.jpg')} color={color} size={size} /> // Replace with the icon you want to use
                    ),
                    tabBarActiveTintColor: '#000000'
                }} />

            <Tab.Screen name="Meds" component={Dashboard}
                options={{
                    tabBarLabel: 'Meds',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/tab.jpg')} color={color} size={size} /> // Replace with the icon you want to use
                    ),
                    tabBarActiveTintColor: '#000000'
                }} />

            <Tab.Screen name="Chat" component={Dashboard}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/chat.jpg')} color={color} size={size} /> // Replace with the icon you want to use
                    ),
                    tabBarActiveTintColor: '#000000'
                }} />

        </Tab.Navigator>
    );
}

export default MyTabs;