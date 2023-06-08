import { Dimensions, StyleSheet } from 'react-native'
import * as colors from '../../constants/colors'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const ComponentCSS = StyleSheet.create({

    gradient_view_header: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    gradient_view_textinp: {
        width: width - 60,
        height: 55,
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    textinp_view: {
        width: width - 65,
        height: 50,
        paddingLeft: 10,
        backgroundColor: colors.primary,
        borderRadius: 7,
        fontSize: 18,
        color: colors.textColor
    },

    btn_gradient_view: {
        width: width - 170,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 20,
    },
    btn_style_view: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",

    },

    btn_text_style: {
        fontSize: 22,
        fontWeight: "600",
        color: colors.primary,
    },

    linkBtn_view: {
        marginTop: 20,
       // padding: 5,
        alignSelf:"center",
    },
    linkBtn_text:{
        padding:5,
        fontSize:18,
        fontWeight:"500",
        color:colors?.textColor,
        textDecorationLine:"underline"
    }


})