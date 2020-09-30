import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    screenFull: {
        flex: 1,
        backgroundColor: '#191414'
    },

    iconBack: {
        paddingBottom: 80,
        paddingLeft: 10,
        color: '#bbb',
        fontSize: 40,
        fontFamily: 'Montserrat-Bold'
    },

    imageIcon : {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textTitle: {
        textAlignVertical: 'top',
        marginBottom: 80,
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
    },

    userField : {
        width: 300,
        height: 60,
        marginTop: 10,
        borderStyle: 'dotted',
        borderColor: '#fff',
        borderWidth: 0.2,
        borderRadius: 15,
        backgroundColor: '#ccc',
        opacity: 0.3
    },

    userPass : {
        width: 300,
        height: 60,
        marginTop: 10,
        borderStyle: 'dotted',
        borderColor: '#fff',
        borderWidth: 0.2,
        borderRadius: 15,
        backgroundColor: '#ccc',
        opacity: 0.3
    },

    logButton : {
        width: 200,
        height: 60,
        borderStyle: 'dotted',
        borderColor: '#1DB954',
        borderWidth: 0.2,
        borderRadius: 50,
        backgroundColor: '#1DB954',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logText : {
        width: 200,
        height: 60,
        marginTop: 20,
        color: '#191414',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 4,
        fontFamily: 'Montserrat-Regular'
    },

    forgotPass : {
        width: 200,
        height: 60,
        marginTop: 10,
        color: '#aaa',
        textAlign: 'center',
        fontSize: 11
    }
})