import React, { FC } from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native';
import { Props } from './types'
import styles from './movieStyle';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useNavigation } from '@react-navigation/native';




const Movie: FC<Props> = (Props) => {
    const navigation = useNavigation();
    let re = /\-/gi
    let date = Props.date?.replace(re, "/")

    return (
        <Pressable style={styles.movieButton} onPress={() => navigation.navigate('Detail', {
            title: Props.title,
            id: Props.data.id,
            selected: Props.selected,
        })}>
            <View style={styles.viewContain}>
                <ImageBackground
                    source={{ uri: Props.source }}
                    resizeMode='contain'
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}
                >
                    <View style={styles.viewCircle}>
                        <CircularProgress
                            value={Math.round(Props.percent * 10)}
                            radius={30}
                            activeStrokeWidth={6}
                            inActiveStrokeWidth={6}
                            progressValueStyle={{ color: 'white', paddingRight: 8 }}
                        />
                        <Text style={styles.textPercent}>%</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>{Props.title}</Text>
                <Text style={styles.textDate}>{date}</Text>
            </View>
        </Pressable>
    )
}

export default Movie;