import { View, StyleSheet, FlatList } from "react-native";
import { Video } from "../utils/types";
import { GridItem } from "./GridItem";

export const Grid = ({ videos }: { videos: Video[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        numColumns={3}
        renderItem={GridItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
