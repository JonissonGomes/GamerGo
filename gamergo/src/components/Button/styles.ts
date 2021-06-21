import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    button: {
        marginTop: 30,
        marginBottom: 30,
        backgroundColor: '#FFE03C',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10
    },

    boxIcon: {
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftColor: '#FFE03C',
        borderTopColor: '#FFE03C',
        borderBottomColor: '#FFE03C',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 14,
    },

    boxText: {
        padding: 14,
        paddingLeft: 40,
        paddingRight: 40
    },

    icon: {
        width: 30,
        height: 30
    },

    textButton: {
        fontSize: 18,
        fontWeight: '700'
    }

})