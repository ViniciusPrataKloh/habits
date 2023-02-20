import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Habit } from '../screens/Habit';
import { Home } from '../screens/Home';
import { New } from '../screens/New';

export function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="home"
                component={Home}
            />

            <Stack.Screen
                name="new"
                component={New}
            />

            <Stack.Screen
                name="habit"
                component={Habit}
            />
        </Stack.Navigator>
    )
}