import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { Props } from './types'
import Movie from '../Movie/movie';

import { imagePath } from '../../services/index';



const MovieList: FC<Props> = (props) => {

   
    return (
        <ScrollView horizontal={true} >
            {
                props.data.map((item: any) => (
                    <Movie key={item.id} data={item} source={imagePath + item.poster_path} title={item.title || item.name} date={item.release_date || item.first_air_date} percent={item.vote_average} selected={props.selected} />
                ))
            }
        </ScrollView>
    )
}

export default MovieList;