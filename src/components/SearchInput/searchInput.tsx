import React, { memo, FC } from 'react'
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from './styles';
import { Props } from './types';


const SearchInput: FC<Props>= (props) => {
    return (
        <View style={[styles.view,props.styleview]} >
            <TextInput placeholder={props.placeholder} style={[styles.input,props.style]} />
            {props.children}
        </View>
    )
}

export default SearchInput;