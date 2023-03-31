import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
    viewContain: {
        height: 250,
        marginTop:15,
    },
    viewBox:{
        flex:1,
        justifyContent:"center",
        height:220,
        width:100 , 
        marginLeft:20, 
        backgroundColor:"white",
        borderRadius:5,
        elevation:10
    },
    viewImage: {
        height: 150,     
    },
    viewText: {
        flex: 1,
        justifyContent:"center",
        paddingHorizontal:5
    },
   
    text:{
        fontSize:16,
        fontWeight:'600',
        color:'black',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        width:100
    },
});

export default styles;