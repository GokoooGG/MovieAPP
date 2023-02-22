import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
    viewContain: {
        height: 150,
    },
    viewText: {
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10
    },

    text:{
        padding:10,
        fontSize:20,
        fontWeight:'700',
        color:'white',
    },
    movieButton: {
        flex: 1,
        paddingTop:50,
        paddingLeft:15,
        width: 300,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: 150 
    },
});

export default styles;