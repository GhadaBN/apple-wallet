import { useState } from "react";
import Animated, {
  clamp,
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";

const Card = ({ card, index, scrollY, activeCardIndex }) => {
  const [cardHeight, setCardHeight] = useState(0);

  const translateY = useSharedValue(0);
  const { height: screenHeight } = useWindowDimensions();
  useAnimatedReaction(
    () => scrollY.value,

    (current) => {
      translateY.value = clamp(-current, -index * cardHeight * 0.95, 0);
    }
  );

  useAnimatedReaction(
    () => activeCardIndex.value,
    (current, previous) => {
      if (current === previous) {
        return; // No change, so do nothing
      }

      console.log("active card changed from", previous, "to", current);

      // No card selected, move to list view
      if (activeCardIndex.value === null) {
        translateY.value = withTiming(
          clamp(-scrollY.value, -index * cardHeight * 0.95, 0)
        );
      } else if (activeCardIndex.value === index) {
        // This card becomes active
        translateY.value = withTiming(-index * cardHeight * 0.95);
      } else {
        // Another card is active, move to the bottom
        translateY.value = withTiming(
          -index * cardHeight * 0.95 + screenHeight * 0.5
        );
      }
    }
  );

  const tap = Gesture.Tap().onEnd(() => {
    if (activeCardIndex.value === null) {
      activeCardIndex.value = index;
    } else {
      activeCardIndex.value = null;
    }
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.Image
        source={card}
        onLayout={(event) =>
          setCardHeight(event.nativeEvent.layout.height + 10)
        }
        style={{
          width: "100%",
          height: undefined,
          aspectRatio: 7 / 4,
          marginVertical: 5,
          transform: [
            {
              translateY: translateY,
            },
          ],
        }}
      />
    </GestureDetector>
  );
};
export default Card;
