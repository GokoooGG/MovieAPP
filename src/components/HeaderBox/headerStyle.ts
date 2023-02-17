import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import theme from "../../utils/theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.tmdbDarkBlue,
        marginRight: 40,
        fontWeight: '600',
        fontSize: 25
    },
    view: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
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
        borderRadius: 22,
        borderColor: theme.colors.tmdbDarkBlue,
        marginTop: -50
    }
});

export default styles;