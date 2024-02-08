import { View, Image } from "react-native";
import { Video } from "../utils/types";

export const GridItem = ({ item }: { item: Video }) => {
  return (
    <View>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
    </View>
  );
};
