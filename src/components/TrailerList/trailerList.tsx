import React, { FC } from 'react'
import { ScrollView } from 'react-native';
import { Props } from './types'


import { imagePath } from '../../services/index';
import Trailer from '../Trailer/trailer';



const TrailerList: FC<Props> = (props) => {
  
    return (
        <ScrollView horizontal={true} >
            {
                props.data.map((item: any) => (
                    <Trailer key={item.id} id={item.id} type={props.selected} source={imagePath + item.backdrop_path} title={item.title || item.name} />
                ))
            }
        </ScrollView>
    )
}

export default TrailerList;