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
        <NavigationContainer>
        <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center'}} >
            <HomeStack.Screen name="HomePage" component={DraverNavigator} options={{ headerShown: false }} />
            <HomeStack.Screen name="Detail" component={MovieDetail} options={({ route, navigation }) => {
                return {
                    title: route.params?.title,
                    headerStyle: {
                        backgroundColor:theme.colors.tmdbDarkBlue,
                    },
                    headerTintColor: '#fff',
                }
            }} />           
        </HomeStack.Navigator>
        </NavigationContainer>
    );
}

function DraverNavigator() {
    return (
        
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center', headerTitle:"",
              headerShadowVisible: false}}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#032541' } }} />
                <Drawer.Screen name="Movies" component={Movies} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#032541' } }} />
                <Drawer.Screen name="Tv Shows" component={TvShows} options={{ headerTintColor: '#fff', headerStyle: { backgroundColor: '#032541' } }} />
            </Drawer.Navigator>
        
    );
}
export default HomePageStack;