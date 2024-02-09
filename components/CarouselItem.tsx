import { Image, Pressable, View } from "react-native";
import { VideoData } from "../utils/types";

export const CarouselItem = ({
  item,
  setSelectedVideo,
}: {
  item: VideoData;
  setSelectedVideo: (video: VideoData | null) => void;
}) => {
  return (
    <View style={{ padding: 5 }}>
      <Pressable onPress={() => setSelectedVideo(item)}>
        <Image
          style={{ width: 200, height: 100 }}
          source={{ uri: item.image }}
        />
      </Pressable>
    </View>
  );
};
