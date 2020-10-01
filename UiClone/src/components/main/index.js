import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native';

import styles from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons'

import Spot from './spot.json'
import RecentlyList from '../albunsRecently';
import { ScrollView } from 'react-native-gesture-handler';

const Main = ({ navigation }) => {

    const [recentes, setRecentes] = useState([]);
    const [recomendados, setRecomendados] = useState([]);
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        function getData() {
            setRecentes(Spot.Recente);
            setRecomendados(Spot.Recomendado);
            setPlaylists(Spot.Playlists);
        }
        getData();
    }, [])

    return (
        <View style={styles.screenFull}>
            <ScrollView>
                <View>
                    <Text style={styles.showSquare}>Ouvidas Recentemente</Text>
                    <FlatList horizontal={true}
                        data={recentes} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <RecentlyList nome={item.name} imagemAlbum={item.image} />
                        )}
                    />
                </View>
                <View>
                    <Text style={styles.showSquare}>Recomendadas para você</Text>
                    <FlatList horizontal={true}
                        data={recomendados} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <RecentlyList nome={item.name} imagemAlbum={item.image} />
                        )}
                    />
                </View>
                <View>
                    <Text style={styles.showSquare}>Playlists Populares</Text>
                    <FlatList horizontal={true}
                        data={playlists} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <RecentlyList nome={item.name} imagemAlbum={item.image} />
                        )}
                    />
                </View>
            </ScrollView>
            <View style={styles.bottonNav}>
                <Icon name='home' onPress={() => navigation.navigate('Main')} style={styles.navIcons} />
                <Icon name='search' style={styles.navIcons} />
                <Ionicon name='library' style={styles.navIcons} />
            </View>
        </View>
    )
}

export default Main
