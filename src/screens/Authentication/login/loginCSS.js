import { Dimensions, StyleSheet } from 'react-native'
import * as colors from '../../../constants/colors'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const loginCSS = StyleSheet.create({
    main_view: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: colors.primary,
        justifyContent: "center",

    },
    scrollView_cont: {
        height: height * 1.3,
        width: width,
    },
    gradient_view: {
        width: "100%",
        height: "35%",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: colors?.textColor,
        alignSelf: "center",
        marginTop: 40,
    },
    image: {
        width: width,
        height: height,
        position: "absolute",
    }

})