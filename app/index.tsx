import { StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData";
import { Grid } from "../components/Grid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { VideoData } from "../utils/types";
import { VideoScreen } from "../components/VideoScreen";

const App = () => {
  const { data } = useQuery({
    queryKey: ["videoData"],
    queryFn: fetchData,
  });
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const unselectedVideos = selectedVideo
    ? data.videos.filter((video) => video.id !== selectedVideo.id).slice(0, 5)
    : null;

  if (!data) return <View />;
  return (
    <SafeAreaView style={styles.container}>
      {selectedVideo ? (
        <VideoScreen
          video={selectedVideo}
          videos={unselectedVideos}
          setSelectedVideo={setSelectedVideo}
        />
      ) : (
        <Grid videos={data.videos} setSelectedVideo={setSelectedVideo} />
      )}
    </SafeAreaView>
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

export default App;
