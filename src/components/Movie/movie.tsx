import React, { FC } from 'react'
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Props } from './types'
import styles from './movieStyle';



const Movie: FC<Props> = (props) => {

    return (
            <TouchableOpacity style={styles.movieButton}>
                <View style={styles.viewContain}>
                <ImageBackground
                    source={props.source}
                    resizeMode='contain'
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}
                />
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text style={styles.textDate}>{props.date}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default Movie;