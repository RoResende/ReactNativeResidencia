import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Quotes = () => {

    const [click, setClick] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(Math.floor(Math.random() * quoteList.length));
        setClick(false);
    }, [click])

    const quoteList = [
        'Frases aleatórias',
        'Não tenho criatividade para isso',
        'Testando Hooks em Native',
        'Mais uma para teste'
    ];

    const handleClick = () => {
        setClick(true);
    }

    return (
        <View style={{ margin: 12, alignItems: 'center'}} >
            <Text>A frase é: {quoteList[index]}</Text>
            <Button title="Clique aqui para uma frase" onPress={handleClick} />
        </View>
    )
}

export default Quotes;
