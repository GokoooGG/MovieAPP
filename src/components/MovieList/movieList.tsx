import React, { FC } from 'react'
import { View, ImageBackground, Pressable, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import { Props } from './types'
import styles from './movieListStyles';
import Movie from '../Movie/movie';




const MovieList: FC<Props | any> = (props) => {
    const image = { uri: "https://www.themoviedb.org/t/p/w440_and_h660_face/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" }
    const MovieImage = { uri: "https://www.themoviedb.org/t/p/w440_and_h660_face/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" }
    let title = 'sadasdasd'
    return (
        <ScrollView horizontal={true} >
            <Movie source={MovieImage} title='Ant-Man and the Wasp: Quantumania' date='Feb 10, 2023' />
            <Movie source={MovieImage} title='Ant-Man and the Wasp: Quantumania' date='Feb 10, 2023' />
            <Movie source={MovieImage} title='Ant-Man and the Wasp: Quantumania' date='Feb 10, 2023' />
        </ScrollView>
    )
}

export default MovieList;