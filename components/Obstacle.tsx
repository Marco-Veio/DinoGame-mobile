import { useEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");

  const offset = useSharedValue(0);

  const anymatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withTiming(
      width,
      {
        duration: 3000,
        easing: Easing.linear,
      },
      onEnd,
    );
  }, [offset]);

  return (
    <Animated.View style={[styles.container, anymatedStyle]}>
      <Image
        style={styles.image}
        source={require("@/assets/images/cactus.png")}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 65,
    height: 65,
    bottom: "30%",
    right: "10%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
