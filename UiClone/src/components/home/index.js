import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

import styles from './style';

const Login = () => {

    const spotifyIcon = require('../../assets/images/Spotify_Icon_RGB_Green.png')

    return (
        <View style={styles.screenFull} >
            <Image source={spotifyIcon} style={styles.imageIcon}/>
            <View style={styles.container} >
                <Text stylle={styles.textTitle}>Instagram</Text>
                <TextInput placeholder='Usuário' style={styles.userField}
                    placeholderTextColor='#191414' />
                <TextInput placeholder='Senha' style={styles.userPass}
                    placeholderTextColor='#191414' />
                <TouchableOpacity title='Entre' style={styles.logButton} />
            </View>
        </View>
    )
}

export default Login;
