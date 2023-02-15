import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from './views/home';
import TvShows from './views/tv-shows';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Movies from './views/movies';
import theme from './utils/theme';
import ThemeProvider from '@react-navigation/native'; 


const Drawer = createDrawerNavigator();

export default function App() {
    return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Home">
                        <Drawer.Screen name="Home" component={HomeScreen} options={{headerTintColor: '#fff',headerStyle:{backgroundColor:'#032541'}}} />
                        <Drawer.Screen name="Movies" component={Movies} options={{headerTintColor: '#fff',headerStyle:{backgroundColor:'#032541'}}}/>
                        <Drawer.Screen name="Tv Shows" component={TvShows} options={{headerTintColor: '#fff',headerStyle:{backgroundColor:'#032541'}}}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>

    );
}