import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    boxView: {
        flex:1,
        width: 155,
        height: 180,
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 10,
        marginBottom: 8
    },

    imageRecent: {
      backgroundColor: '#808080',
      width: '90%',
      height: '90%',
      alignSelf: 'center',
    },

    infoRecent: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 0,
        paddingLeft: 5,
        paddingBottom: 0,
        height: 40,
    },

    titleRecent : {
        fontFamily: 'Montserrat-Bold',
        fontSize: 11,
        color: '#fff',
        marginLeft: 1
    }
})