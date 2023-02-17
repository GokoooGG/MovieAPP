import React, { Children, FC } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './headerStyle';
import { Props } from './types';
import SelectDropdown from 'react-native-select-dropdown';
import theme from '../../utils/theme';

const HeaderBox: FC<Props> = (props) => {
    const data = props.selection
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    return (
        <View style={styles.view}>
            <Text style={styles.text} >{props.children}</Text>
            <SelectDropdown 
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
            selectedRowTextStyle={{color:theme.colors.tmdbLighterGreen}}
            rowTextStyle={{color:theme.colors.tmdbDarkBlue,fontWeight:'600'}}
            dropdownStyle={styles.dropDown}
            selectedRowStyle={{backgroundColor:theme.colors.tmdbDarkBlue,borderRadius:20}}
            data={data} defaultValueByIndex={0} 
            onSelect={(selectedItem, index) => {

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
    )
}

export default HeaderBox;