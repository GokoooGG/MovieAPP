import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
    viewContain: {
        height: 300,
    },
    viewText: {
        flex: 1,
    },
    viewCircle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15,
        marginTop:250,
        height:60,
        width:60,
        backgroundColor:theme.colors.tmdbDarkBlue,
        borderRadius:100,
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
    textPercent:{
        position:'absolute',
        fontSize:13,
        right:12,
        color:'white'
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
        height: 280
    },
});

export default styles;