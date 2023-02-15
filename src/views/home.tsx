import * as React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import HomeCard from '../components/HeaderCard/HomeCard';



function HomeScreen({ }) {
    const image1 = { uri: 'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg' }
    const image2 = { uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg' }

    return (
        <SafeAreaView style={{ flex: 1 }} >

            <View style={{ flex: 1, backgroundColor: 'lightblue' }}>

                <View style={{ justifyContent: 'center', height: 300 }}>
                    <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
                        <View style={{ flex: 1, marginHorizontal: 6 }}>
                            <Text style={[styles.text, { marginTop: 20 }]} >Welcome.</Text>
                            <Text style={[styles.text, { fontWeight: '600', fontSize: 25, width: 360 }]} >
                                Millions of movies, TV shows and people to discover. Explore now..
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                <TextInput placeholder="Search for a movie, tv show, person......" style={styles.input} />
                                <TouchableOpacity style={{
                                    backgroundColor: 'lightgreen',
                                    borderRadius: 30,
                                    height: 43,
                                    width: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    left: 298,
                                    top: 22
                                }} >
                                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', }}>Search</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={{ justifyContent: 'center', height: 300 }}>
                    <ImageBackground source={image2} resizeMode="cover" style={styles.image} >
                        <Text
                            style={[styles.text, { fontSize: 35, width: 236, borderBottomWidth: 1, borderColor: 'white' }]} >
                            THATS A WRAP 2022.
                        </Text>
                        <Text style={[styles.text, { fontSize: 20, }]} >The Best (and Worst) from 2022.</Text>
                        <TouchableOpacity style={styles.touch} >
                            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', }}>Check It Out</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

            </View>

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