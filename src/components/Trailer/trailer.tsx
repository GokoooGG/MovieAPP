import React, { FC, useCallback, useEffect, useState } from 'react'
import { View, ImageBackground, Text, Pressable, Modal, Alert } from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";

import { Props } from './types'
import styles from './trailerStyle';
import { getMovieVideo } from '../../services/index';





const Trailer: FC<Props> = (props) => {

    const [trailer, setTrailer] = useState<any>([])
    const [isVisible, setVisible] = useState(false);



    useEffect(() => {

        initTrailers()

    }, [isVisible])


    const initTrailers = async () => {
        const trailerData = await getMovieVideo(props.type, props.id)
        setTrailer(trailerData.results.at(-1))
    }


    return (
        <View>
            <Pressable style={styles.movieButton} onPress={() => {
                if (trailer == undefined) {
                    Alert.alert("No Video Avaliable");
                } else {
                    setVisible(true)
                } 
            }}>
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
                            videoId={trailer?.key} />
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Trailer;