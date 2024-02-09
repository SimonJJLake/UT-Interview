import { View, StyleSheet, Text, ScrollView } from "react-native";
import { VideoData } from "../utils/types";
import { CarouselItem } from "./CarouselItem";
import { useState } from "react";

export const Carousel = ({
  videos,
  setSelectedVideo,
}: {
  videos: VideoData[];
  setSelectedVideo: (video: VideoData | null) => void;
}) => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const scrollIndex = Math.max(Math.floor(scrollAmount / 210), 0);
  return (
    <View style={{ width: 250 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        snapToInterval={210}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setScrollAmount(event.nativeEvent.contentOffset.x);
        }}
      >
        {videos.map((video) => (
          <CarouselItem
            item={video}
            setSelectedVideo={setSelectedVideo}
            key={video.id}
          />
        ))}
      </ScrollView>
      <View style={styles.progress}>
        {videos.map((_, index) => (
          <Text>{scrollIndex === index ? "x" : "o"}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  progress: {
    width: 250,
    justifyContent: "center",
    flexDirection: "row",
  },
});
