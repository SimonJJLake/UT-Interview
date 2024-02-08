import { View, StyleSheet, Text, Button } from "react-native";
import { VideoData } from "../utils/types";
import { ResizeMode, Video } from "expo-av";
import { useRef } from "react";

export const VideoScreen = ({
  video,
  setSelectedVideo,
}: {
  video: VideoData;
  setSelectedVideo: (video: VideoData | null) => void;
}) => {
  const videoRef = useRef(null);
  return (
    <View style={styles.container}>
      <Button onPress={() => setSelectedVideo(null)} title="Back" />
      <Text>{video.id}</Text>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: video.video_files[0].link,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  video: {
    height: 200,
    width: 300,
  },
});
