import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    screenFull: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#191414',
    },

    showSquare: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#fff'
    },

    bottonNav: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#190909',
        backgroundColor: '#191414'
    },

    navIcons: {
        color: '#999',
        fontSize: 40
    }
})