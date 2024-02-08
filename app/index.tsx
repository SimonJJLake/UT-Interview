import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/fetchData";

const App = () => {
  const { data } = useQuery({
    queryKey: ["videoData"],
    queryFn: fetchData,
  });
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

export default App;
