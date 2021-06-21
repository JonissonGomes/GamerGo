import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0E1647'
    },

    image: {
        marginTop: -80,
        width: 350,
        height: 300
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    subTitle: {
        width: 250,
        color: '#fEF0fc',
        fontSize: 14,
        textAlign: 'center'
    }
})