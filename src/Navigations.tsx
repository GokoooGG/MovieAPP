import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './views/home';
import MovieDetail from './views/movie-detail';
import Movies from './views/movies';
import TvShows from './views/tv-shows';
import theme from './utils/theme';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

function HomePageStack() {
    return (
        <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
            <HomeStack.Screen name="HomePage" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Detail" component={MovieDetail} />
        </HomeStack.Navigator>
    );
}

function draverNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomePageStack} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#032541' } }} />
                <Drawer.Screen name="Movies" component={Movies} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#032541' } }} />
                <Drawer.Screen name="Tv Shows" component={TvShows} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#032541' } }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default draverNavigator;