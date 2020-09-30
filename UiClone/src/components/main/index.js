import React,{ useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import styles from './style';

import Spot from './spot.json'
import RecentlyList from '../albunsRecently';

const Main = () => {

    const [recentes, setRecentes] = useState([]);

    useEffect(() => {
        function getData () {
            setRecentes(Spot.Recente)
        }
        getData();
    }, [])

    return (
        <View style={styles.screenFull}>
            <View>
                <Text style={styles.mostRecent}>Ouvidas Recentemente</Text>
                <FlatList horizontal={true}
                    data={recentes} keyExtractor={item => `${item.id}`}
                    renderItem = {({item}) => (
                        <RecentlyList nome={item.name} imagemAlbum={item.image} />
                    )} 
                 />
            </View>
            <View>
                <Text style={styles.mostRecent}>Recomendadas para você</Text>
                <FlatList horizontal={true}
                    data={recentes} keyExtractor={item => `${item.id}`}
                    renderItem = {({item}) => (
                        <RecentlyList nome={item.name} imagemAlbum={item.image} />
                    )} 
                 />
            </View>
            <View>
                <Text style={styles.mostRecent}>Playlists Populares</Text>
                <FlatList horizontal={true}
                    data={recentes} keyExtractor={item => `${item.id}`}
                    renderItem = {({item}) => (
                        <RecentlyList nome={item.name} imagemAlbum={item.image} />
                    )} 
                 />
            </View>
        </View>
    )
}

export default Main
