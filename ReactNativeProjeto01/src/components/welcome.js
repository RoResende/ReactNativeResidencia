import React, { useState } from 'react';
import { Text, Button } from 'react-native';

const Welcome = () => {

    const [contador, setContador] = useState(0);

    return (
        <>
            <Text>Seja Bem Vindo!</Text>
            <Text>{contador}</Text>
            <Button title='Incremente!' onPress={() => setContador(contador+1)} />
            <Button title='Zerar Contador!' onPress={() => setContador(0)} />
        </>
    )

}

export default Welcome;