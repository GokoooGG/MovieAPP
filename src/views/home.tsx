import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/Button/button';
import HomeContainer from '../components/Container/HomeContainer';
import SearchInput from '../components/SearchInput/searchInput';
import backLogo from '../assets/images/backLogo.png';
import MovieBox from '../components/movieBox/MovieBox';


function HomeScreen({ }) {
    const image1 = { uri: 'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg' }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <HomeContainer source={image1} >
                <Text style={[styles.text, { marginTop: 20 }]} >Welcome.</Text>
                <Text style={[styles.text, { fontWeight: '600', fontSize: 25, width: 360 }]} >
                    Millions of movies, TV shows and people to discover. Explore now..
                </Text>
                <SearchInput styleview={{ marginTop: 30 }} placeholder='Search for a movie,tv shows,person......'>
                    <Button style={{
                        backgroundColor: 'lightgreen',
                        height: 44,
                        width: 100,
                        position: 'absolute',
                        left: 270,
                    }} onPress={() => { }}>Search</Button></SearchInput>
            </HomeContainer>
            <HomeContainer source={backLogo}>
                <MovieBox>Trending</MovieBox>
            </HomeContainer>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 46,
        paddingHorizontal: 20,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    text: {
        fontWeight: '700',
        fontSize: 50,
        color: 'white',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    touch: {
        width: 150,
        alignItems: 'center',
        marginLeft: 16,
        marginTop: 16,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
    }
});

export default HomeScreen