import React from "react";

import styles from "./style";
import { View, Image, Text } from "react-native";

function RecentlyList({
  nome,
  imagemAlbum
}) {
  return (
    <View style={styles.boxView}>
      <Image source={{ uri: imagemAlbum }} style={styles.imageRecent}/>
      <View style={styles.infoRecent}>
        <Text style={styles.titleRecent}>{nome}</Text>
      </View>
    </View>
  );
}

export default RecentlyList;