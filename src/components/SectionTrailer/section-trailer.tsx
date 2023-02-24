import React, { FC, useEffect, useState } from 'react'
import { Text, View, ImageBackground } from 'react-native';

import { Props } from './types'
import theme from '../../utils/theme';

import SelectDropdown from 'react-native-select-dropdown'
import styles from './sectionTrailerStyles'

import { getPopularMovies, getTrendMovies } from '../../services';
import TrailerList from '../TrailerList/trailerList';
import { imagePath } from '../../services/index';
import LinearGradient from 'react-native-linear-gradient';


const SectionTrailer: FC<Props> = (props) => {
    const [selected, setSelected] = useState(props.selected)
    const data = props.selectionList
    const [movies, setMovies] = useState<any>([])

    useEffect(() => {
        initMovies()
    }, [selected])


    const initMovies = async () => {
        const movieData = await getPopularMovies(selected + "/popular")
        setMovies(movieData.results)
    }


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={{ uri: imagePath + movies[0]?.backdrop_path }}>
                <LinearGradient style={{ flex: 1 }} colors={['rgba(3,37,65, 0.75)', 'rgba(3,37,65, 0.75)']}>
                    {props.headerShown ?
                        <View style={styles.view}>
                            <Text style={styles.text} >{props.header}</Text>
                            <SelectDropdown
                                onChangeSearchInputText={() => { }}
                                buttonStyle={styles.button}
                                buttonTextStyle={styles.buttonText}
                                selectedRowTextStyle={{ color: theme.colors.tmdbLighterGreen }}
                                rowTextStyle={{ color: theme.colors.tmdbDarkBlue, fontWeight: '600' }}
                                dropdownStyle={styles.dropDown}
                                selectedRowStyle={{ backgroundColor: theme.colors.tmdbDarkBlue, borderRadius: 20, }}
                                data={data}
                                defaultValueByIndex={0}
                                onSelect={(selectedItem, index) => {

                                    if (selectedItem == 'Streaming') {
                                        setSelected("movie")
                                    }

                                    else if (selectedItem == 'On Tv') {
                                        setSelected("tv")
                                    }

                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    // text represented after item is selected
                                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    // text represented for each item in dropdown
                                    // if data array is an array of objects then return item.property to represent item in dropdown
                                    return item
                                }} />
                        </View> : <></>
                    }
                    <TrailerList selected={selected} data={movies} />
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}
export default SectionTrailer;