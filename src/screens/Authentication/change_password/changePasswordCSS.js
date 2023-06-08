import { Dimensions, StyleSheet } from 'react-native'
import * as colors from '../../../constants/colors'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const ChangePassCSS = StyleSheet.create({
    main_view: {
        width: width,
        height: height,
        backgroundColor: colors.primary
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
        fontSize: 25,
        fontWeight: "600",
        color: colors?.textColor,
        alignSelf: "center",
        marginTop: 40,
    },
    txtinp_Scrollview_cont: {
        width: width,
       // borderWidth:2
    }

})