import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login';
import LButton from './src/screens/LButton';
import FButton from './src/screens/FButton';
import SingupButton from './src/screens/signupButton';
import Spincode from './src/screens/Spincode';
import Chphone from './src/screens/Chphone';
import Chpassword from './src/screens/Chpassword';
const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LButton" component={LButton} />
        <Stack.Screen name="FButton" component={FButton} options={{title:'Forgot Password'}} />
        <Stack.Screen name="SignupButton" component={SingupButton} options={{title:'Sign Up'}}/>
        <Stack.Screen name="Spincode" component={Spincode} options={{title:'Pin Code'}}/>
        <Stack.Screen name="Chphone" component={Chphone} options={{title:'Phone'}}/>
        <Stack.Screen name="Chpassword" component={Chpassword} options={{title:'Change Password'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
