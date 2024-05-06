import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Question from '../screens/Question';
import Score from '../screens/Score';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'},headerTitleAlign:'center'}}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Question" component={Question} />
                <Stack.Screen name="Score" component={Score} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;