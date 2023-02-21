import React, { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { Props } from './types'
import theme from '../../utils/theme';

import SelectDropdown from 'react-native-select-dropdown'
import styles from './sectionStyles'
import MovieList from '../MovieList/movieList'
import { getPopularMovies, getTrendMovies } from '../../services';

const SectionMovie: FC<Props> = (props) => {
    const [selected, setSelected] = useState(props.selected)
    const data = props.selectionList
    const [movies, setMovies] = useState([])

    useEffect(() => {
        initMovies()
    }, [selected])


    const initMovies = async () => {
        if (props.keyWord == 'trend') {
            const movieData = await getTrendMovies(selected)
            setMovies(movieData.results)
        }
        else if(props.keyWord == 'popular') {
            const movieData = await getPopularMovies(selected)
            setMovies(movieData.results)
        }

    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.view}>
                <Text style={styles.text} >{props.children}</Text>
                <SelectDropdown
                    buttonStyle={styles.button}
                    buttonTextStyle={styles.buttonText}
                    selectedRowTextStyle={{ color: theme.colors.tmdbLighterGreen }}
                    rowTextStyle={{ color: theme.colors.tmdbDarkBlue, fontWeight: '600' }}
                    dropdownStyle={styles.dropDown}
                    selectedRowStyle={{ backgroundColor: theme.colors.tmdbDarkBlue, borderRadius: 20 }}
                    data={data}
                    defaultValueByIndex={0}
                    onSelect={(selectedItem, index) => {
                        if (selectedItem == 'Today') {
                            setSelected("day")
                        }
                        else if (selectedItem == 'This Week') {
                            setSelected("week")
                        }
                        else if (selectedItem == 'On Tv') {
                            setSelected("tv")
                        }
                        else if (selectedItem == 'Streaming') {
                            setSelected("movie")
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
            </View>
            <MovieList selected={selected} data={movies} />
        </View>
    )
}
export default SectionMovie;