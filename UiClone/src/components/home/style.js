import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    screenFull: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#191414'
    },

    imageIcon : {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 20
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textTitle: {
        textAlignVertical: 'top',
        marginBottom: 100,
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50
    },

    userField : {
        width: 300,
        height: 60,
        marginTop: 10,
        borderStyle: 'dotted',
        borderColor: '#fff',
        borderWidth: 0.2,
        borderRadius: 20,
        backgroundColor: '#999',
        opacity: 0.4
    },

    userPass : {
        width: 300,
        height: 60,
        marginTop: 10,
        borderStyle: 'dotted',
        borderColor: '#fff',
        borderWidth: 0.2,
        borderRadius: 20,
        backgroundColor: '#999',
        opacity: 0.4
    },

    logButton : {
        width: 300,
        height: 60,
        marginTop: 20,
        borderStyle: 'dotted',
        borderColor: '#1DB954',
        borderWidth: 0.2,
        borderRadius: 50,
        backgroundColor: '#1DB954'
    }
})