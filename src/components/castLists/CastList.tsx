import React, { FC } from 'react'
import { ScrollView, View, ImageBackground, Text } from 'react-native';
import { Props } from './types';
import { imagePath } from '../../services';
import styles from './styles';


const CastList: FC<Props> = (props) => {


    return (

        <View style={styles.viewContain}>
            <ScrollView horizontal={true}>
                {
                    props.data?.map((item: any) => (
                        item.known_for_department == "Acting" &&

                        <View style={styles.viewBox}>
                            <View style={styles.viewImage}>
                                <ImageBackground
                                    source={{ uri: (item.profile_path ? imagePath + item.profile_path : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAEVf692EM8xBhdn86-sCDC7tKYX2aWYZgw&usqp=CAU") }}
                                    imageStyle={{ borderRadius: 5 }}
                                    style={styles.image}
                                >
                                </ImageBackground>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>

                        </View>

                    ))
                }
            </ScrollView>
        </View>

    )
}

export default CastList;