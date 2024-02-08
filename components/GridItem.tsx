import { Image, Pressable, View } from "react-native";
import { VideoData } from "../utils/types";

export const GridItem = ({
  item,
  setSelectedVideo,
}: {
  item: VideoData;
  setSelectedVideo: (video: VideoData | null) => void;
}) => {
  return (
    <View>
      <Pressable onPress={() => setSelectedVideo(item)}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
      </Pressable>
    </View>
  );
};
