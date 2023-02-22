import React, { FC } from 'react'
import { View, ImageBackground, TouchableOpacity, Text, Pressable } from 'react-native';
import { Props } from './types'
import styles from './trailerStyle';
import CircularProgress from 'react-native-circular-progress-indicator';



const Trailer: FC<Props> = (props) => {
    return (
        <Pressable style={styles.movieButton}>
            <View style={styles.viewContain}>
                <ImageBackground
                    source={{ uri: props.source }}
                    resizeMode='contain'
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}
                >
                </ImageBackground>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </Pressable>
    )
}

export default Trailer;