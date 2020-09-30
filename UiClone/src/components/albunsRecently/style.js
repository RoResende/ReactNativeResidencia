import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    boxView: {
        width: 20,
        height: 20,
        justifyContent: center,
        marginTop: 0,
        marginLeft: 10,
        marginBottom: 8
    },

    imageRecent: {
      height: '90%',
      width: '100%',
      background: '#80808055',
      alignSelf: 'center',
    },

    infoRecent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 0,
        paddingLeft: 5,
        paddingBottom: 0,
        height: 40,
    },

    titleRecent : {
        fontSize: 11,
        color: 'fff',
        marginLeft: 5
    }
})