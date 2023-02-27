import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigations from './Navigations';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigations/>
        </SafeAreaProvider >

    );
}