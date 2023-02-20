import { ReactNode } from "react";
import { StyleProp,ViewStyle} from "react-native";

export interface Props {
    style?: StyleProp<ViewStyle>;
    title?: string;
    date?:string;
    source?: string;
}