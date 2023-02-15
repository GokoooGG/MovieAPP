import React , {FC,ReactNode} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Props } from './types';
import styles from './styles';

const Button: FC<Props> = (props) => {
    return(
        <TouchableOpacity style={[styles.touch,props.style]}>
            <Text style={styles.text} >{props.children}</Text>
        </TouchableOpacity>
    )
}

export default Button;