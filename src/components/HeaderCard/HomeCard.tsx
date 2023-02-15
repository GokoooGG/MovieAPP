import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';

const HomeCard: React.FC<any> = ({ head, child, children, url }) => {
    return (
        <View>
            <ImageBackground source={url} resizeMode="cover">
                <Text style={[styles.text, { marginTop: 20 }]} >{head}</Text>
                <Text style={[styles.text, { fontWeight: '600', fontSize: 25, width: 360 }]} >
                    {child}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    {children}
                </View>
            </ImageBackground>
        </View>
    )
}



export default HomeCard;
