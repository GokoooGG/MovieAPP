import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewContain: {
        height: 300,
    },
    viewText: {
        flex: 1,
    },
    text:{
        padding:10,
        fontSize:23,
        fontWeight:'700',
        color:'black',
    },
    textDate:{
        paddingHorizontal:12
    },
    movieButton: {
        flex: 1,
        paddingTop:20,
        paddingLeft:15,
        width: 200,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 300
    },
});

export default styles;