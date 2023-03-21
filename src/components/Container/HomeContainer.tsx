import React, { FC } from 'react'
import { ImageBackground, View } from 'react-native'
import { Props } from './types'
import styles from './containerStyle';
import LinearGradient from 'react-native-linear-gradient';

const HomeContainer: FC<Props | any> = (props) => {
    return (
        <View style={[styles.viewMain, props.style]} >
            {props.source ?
                <ImageBackground source={props.source} style={[styles.image,props.style3]}>
                    {props.linearG ?
                        <LinearGradient style={{ flex: 1 }} colors={[props.lineargColor||'rgba(3,37,65, 0.8)', 'rgba(3,37,65, 0.0)']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
                            <View style={[styles.viewSecond, props.style2]}>
                                {props.children}
                            </View>
                        </LinearGradient> :
                        <View style={[styles.viewSecond, props.style2]}>
                            {props.children}
                        </View>
                    }
                </ImageBackground> :
                <View style={[styles.viewSecond, props.style2]}>
                    {props.children}
                </View>
            }

        </View>
    )
}
export default HomeContainer;