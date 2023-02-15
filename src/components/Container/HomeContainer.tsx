import React, { FC } from 'react'
import { ImageBackground, View } from 'react-native'
import { Props } from './types'
import styles from './containerStyle';

const HomeContainer: FC<Props | any> = (props) => {
    return (
        <View style={[styles.viewMain,props.style]} >
            <ImageBackground source={props.source} resizeMode='cover' style={styles.image}>
                <View style={styles.viewSecond}>
                    {props.children}
                </View>
            </ImageBackground>
        </View>
    )
}
export default HomeContainer;