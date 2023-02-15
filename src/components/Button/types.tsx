import  {ReactNode} from 'react';
import { StyleProp, ViewStyle, TextStyle,GestureResponderEvent } from 'react-native';

export interface Props {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>
    onPress: ((event:GestureResponderEvent) =>void) | undefined;
}
