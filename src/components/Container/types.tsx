import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface Props {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    style2?: StyleProp<ViewStyle>;
    style3?: StyleProp<ViewStyle>;
    source?: string;
    linearG?: boolean;
    lineargColor?:string;
}