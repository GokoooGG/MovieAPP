import React, { FC } from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native';
import { Props } from './types'
import styles from './movieStyle';
import CircularProgress from 'react-native-circular-progress-indicator';
import MovieDetail from '../../views/movie-detail';
import { useNavigation } from '@react-navigation/native';




const Movie: FC<Props> = (props,{navigation}:any) => {
    
    return (
        <Pressable style={styles.movieButton} onPress={()=>navigation.navigate(MovieDetail)}>
            <View style={styles.viewContain}>
                <ImageBackground
                    source={{ uri: props.source }}
                    resizeMode='contain'
                    imageStyle={{ borderRadius: 10 }}
                    style={styles.image}
                >
                    <View style={styles.viewCircle}>
                        <CircularProgress 
                        value={Math.round(props.percent*10)} 
                        radius={30}
                        activeStrokeWidth={6}
                        inActiveStrokeWidth={6}
                        progressValueStyle={{  color: 'white' , paddingRight:8 }}
                        />
                        <Text style={styles.textPercent}>%</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.text}>{props.title}</Text>
                <Text style={styles.textDate}>{props.date}</Text>
            </View>
        </Pressable>
    )
}

export default Movie;