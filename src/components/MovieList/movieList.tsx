import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { Props } from './types'
import Movie from '../Movie/movie';
import { getTrendMovies,} from '../../services';
import { imagePath } from '../../services/index';



const MovieList: FC<Props | any> = (props) => {

   
    return (
        <ScrollView horizontal={true} >
            {
                props.data.map((item: any) => (
                    <Movie key={item.id} source={imagePath + item.poster_path} title={item.title} date={item.release_date} />
                ))
            }
        </ScrollView>
    )
}

export default MovieList;