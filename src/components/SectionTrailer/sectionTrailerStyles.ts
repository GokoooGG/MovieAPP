import { StyleSheet } from "react-native";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
    text: {
        color: 'white',
        paddingHorizontal: 20,
        fontWeight: '600',
        fontSize: 25
    },
    view: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        left:210,
        width: 180,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: theme.colors.tmdbDarkBlue,
    },
    buttonText: {
        fontWeight: '600',
        color: theme.colors.tmdbLighterGreen
    },
    dropDown: {
        backgroundColor: theme.colors.tmdbLighterGreen,
        borderWidth: 2,
        borderRadius: 23,
        borderColor: theme.colors.tmdbDarkBlue,
        marginTop: -50
    }
});

export default styles;