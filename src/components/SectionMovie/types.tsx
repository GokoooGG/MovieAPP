import { ReactNode } from "react";
import { StyleProp,ViewStyle} from "react-native";

export interface Props {
    style?: StyleProp<ViewStyle>;
    selectionList:Array<string>;
    selected:string;
    keyWord?:string;
    header?:string;
    headerShown:boolean;
}