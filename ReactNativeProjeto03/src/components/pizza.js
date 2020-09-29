import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Pizza = () => {

    const [addPessoa, setAddPessoa] = useState();
    const [pessoasList, setPessoasList] = useState([]);

    const handleAddPessoa = () => {
        setPessoasList([...pessoasList, addPessoa]);
        setAddPessoa('');
    };

    return (
        <View>
            <Text>Insira o nome da Pessoa.</Text>
            <TextInput placeholder="Nome" onChangeText={text => setAddPessoa(text)} defaultValue={addPessoa} />
            <Button title="Submit!" onPress={handleAddPessoa} />
            {pessoasList.map(pess => {
                return (
                    <View key={pess} >
                        <Text>{pess}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default Pizza;
