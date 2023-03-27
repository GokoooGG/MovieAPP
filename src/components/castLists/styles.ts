import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
    viewContain: {
        height: 250,
        marginTop:10
    },
    viewBox:{
        flex:1,
        justifyContent:"center",
        alignItems:"center", 
        width:130 , 
        marginRight:10, 
        backgroundColor:"#1E1E1E",
        borderRadius:10,
        elevation:12
    },
    viewImage: {
        height: 150,
        borderWidth:3, 
        borderColor:"lightgray",
        borderRadius:10,
        marginTop:10,
    },
    viewText: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
   
    text:{
        fontSize:18,
        fontWeight:'400',
        color:'white',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        width:100
    },
});

export default styles;