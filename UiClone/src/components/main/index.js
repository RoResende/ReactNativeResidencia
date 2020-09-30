import React,{ useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import styles from './style';

import Spot from './spot.json'
import RecentlyList from '../albunsRecently';

const Main = () => {

    useState[recentes,setRecentes] = useState([]);

    return (
        <SafeAreaView style={styles.screenFull}>
            <View>
                <Text style={styles.mostRecent}>Ouvidas Recentemente</Text>
                <FlatList horizontal
                    data={Spot.Recent} keyExtractor={item => `${item.id}`}
                    renderItem = {({item}) => (
                        <RecentlyList nome={item.name} imagemAlbum={item.image} />
                    )} 
                 />
            </View>
        </SafeAreaView>
    )
}

export default Main
