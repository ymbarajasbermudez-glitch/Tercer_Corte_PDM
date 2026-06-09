import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  imageSize: number;
  stickerSource: any;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    })
    .onUpdate((event) => {
      translateX.value = offsetX.value + event.translationX;
      translateY.value = offsetY.value + event.translationY;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 100,
            left: 120,
            width: imageSize,
            height: imageSize,
            zIndex: 999,
          },
          animatedStyle,
        ]}
      >
        <Animated.Image
          source={stickerSource}
          style={{ width: imageSize, height: imageSize }}
        />
      </Animated.View>
    </GestureDetector>
  );
}
