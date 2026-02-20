import { Image, View } from "react-native";

export default function Obstacle() {
  return (
    <View>
      <Image
        source={require("@/assets/images/cactus.png")}
        resizeMode="contain"
      />
    </View>
  );
}
