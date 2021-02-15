import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import Ionicons from 'react-native-vector-icons/Ionicons';
/* import { StackActions } from '@react-navigation/native' */
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
                case 'TelaA':
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                break
                case 'TelaB':
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                break
                case 'TelaC':
                    iconName = focused ? 'ios-list' : 'ios-list-outline'
                break
            }
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
    tabBarOptions={{
        activeTintColor: '#b60fff',
        inactiveTintColor: '#000',
        showLabel: true,
        /* labelStyle: { fontSize: 30 } */
    }} initialRouteName="TelaB"    >
        <Tab.Screen 
            name="TelaA" 
            component={TelaA} 
            options={{ title: "Inicial" }}
        />
        <Tab.Screen 
            name="TelaB" 
            component={TelaB} 
            options={{ title: "Meio" }}
        />
        <Tab.Screen 
            name="TelaC" 
            component={TelaC} 
            options={{ title: "Final" }}
        />
    </Tab.Navigator>
)