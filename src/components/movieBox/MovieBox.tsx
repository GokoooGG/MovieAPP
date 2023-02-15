import React,{Children, FC} from 'react';
import {View,Text, ImageBackground} from 'react-native';
import { Props } from './types';

const MovieBox: FC<Props> = (props)=>{
    return(
        <View>
            <Text style={{fontWeight:'600', fontSize:25}} >{props.children}</Text>
        </View>
    )
}

export default MovieBox;