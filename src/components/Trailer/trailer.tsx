import React, { FC, useCallback, useEffect, useState } from 'react'
import { View, ImageBackground, Text, Pressable, Modal, Alert } from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";

import { Props } from './types'
import styles from './trailerStyle';
import { videoPath } from '../../services';
import { getMovieVideo } from '../../services/index';





const Trailer: FC<Props> = (props) => {

    const [trailer, setTrailer] = useState<any>([])
    const [isVisible, setVisible] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        initMovies()
    }, [])


    const initMovies = async () => {
        const movieData = await getMovieVideo(props.id)
        setTrailer(movieData.results)
    }


    return (
        <View>
            <Pressable style={styles.movieButton} onPress={() => { setVisible(true) }}>
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
            </Pressable >
            <Modal visible={isVisible} transparent={true} onRequestClose={() => { setVisible(false) }} >
                <Pressable
                    onPress={() => setVisible(false)}
                    style={{
                        flex: 1, backgroundColor: 'rgba(0,0,0, 0.75)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                    <View onStartShouldSetResponder={(event) => true}
                        onTouchEnd={(e) => {
                            e.stopPropagation();
                        }}>
                        <YoutubePlayer
                            height={300}
                            width={400}
                            play={false}
                            videoId={'iee2TATGMyI'} />
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Trailer;