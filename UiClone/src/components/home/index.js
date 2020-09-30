import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from './style';

const Login = () => {

    const spotifyIcon = require('../../assets/images/Spotify_Icon_RGB_Green.png')

    return (
        <View style={styles.screenFull} >
            <Image source={spotifyIcon} style={styles.imageIcon} />
            <View style={styles.container} >
                <Text style={styles.textTitle}>Ouça a trilha sonora da sua vida</Text>
                <TextInput placeholder='Usuário' style={styles.userField}
                    placeholderTextColor='#191414' />
                <TextInput placeholder='Senha' style={styles.userPass}
                    placeholderTextColor='#191414' />
                <TouchableOpacity>
                    <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity title='Entrar' style={styles.logButton}>
                    <Text style={styles.logText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;
