import React, { FC } from 'react'
import { ImageBackground, View } from 'react-native'
import { Props } from './types'
import styles from './containerStyle';

const HomeContainer: FC<Props | any> = (props) => {
    return (
        <View style={[styles.viewMain, props.style]} >
            {props.source ?
                <ImageBackground source={props.source} resizeMode='cover' style={styles.image}>
                    <View style={[styles.viewSecond, props.style2]}>
                        {props.children}
                    </View>
                </ImageBackground> :
                <View style={[styles.viewSecond, props.style2]}>
                    {props.children}
                </View>
            }

        </View>
    )
}
export default HomeContainer;