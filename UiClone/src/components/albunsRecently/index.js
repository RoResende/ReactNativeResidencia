import React from "react";

import styles from "./style";
import { View } from "react-native";

function RecentlyList({
  nome,
  imagemAlbum
}) {
  return (
    <View style={styles.boxView}>
      <Image source={{ uri: imagemAlbum }} />
      <View style={styles.infoRecent}>
        <Text style={styles.titleRecent}>{nome}</Text>
      </View>
    </View>
  );
}

export default RecentlyList;