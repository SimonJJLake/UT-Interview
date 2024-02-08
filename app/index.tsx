import { StyleSheet, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData";
import { Grid } from "../components/Grid";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const { data } = useQuery({
    queryKey: ["videoData"],
    queryFn: fetchData,
  });
  if (!data) return <View />;
  return (
    <SafeAreaView style={styles.container}>
      <Grid videos={data.videos} />
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
