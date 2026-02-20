import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function MovingBackground() {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(width, {
        duration: 5000,
        easing: Easing.linear,
      }),
      -1,
    );
  }, [offset]);

  return (
    <View style={styles.screen}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Image
          source={require("@/assets/images/game-background.png")}
          style={{ width, height: "100%" }}
          resizeMode="cover"
        />

        <Image
          source={require("@/assets/images/game-background.png")}
          style={{ width, height: "100%" }}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
  },
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
});
