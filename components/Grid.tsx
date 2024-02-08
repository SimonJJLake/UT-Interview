import { View, StyleSheet, FlatList } from "react-native";
import { VideoData } from "../utils/types";
import { GridItem } from "./GridItem";

export const Grid = ({
  videos,
  setSelectedVideo,
}: {
  videos: VideoData[];
  setSelectedVideo: (video: VideoData | null) => void;
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        numColumns={3}
        renderItem={({ item }) => (
          <GridItem item={item} setSelectedVideo={setSelectedVideo} />
        )}
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
