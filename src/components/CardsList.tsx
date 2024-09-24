import { View, Image, useWindowDimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  cancelAnimation,
  useSharedValue,
  withDecay,
  clamp,
  withClamp,
} from "react-native-reanimated";
import Card from "./card";
import { useState } from "react";
const cards = [
  require("../../assets/cards/Card_1.png"),
  require("../../assets/cards/Card_2.png"),
  require("../../assets/cards/Card_3.png"),
  require("../../assets/cards/Card_4.png"),
  require("../../assets/cards/Card_5.png"),
  require("../../assets/cards/Card_6.png"),
];

const CardsList = () => {
  const [listHeight, setListHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();

  const activeCardIndex = useSharedValue(null);

  const scrollY = useSharedValue(0);
  const maxScrollY = listHeight - screenHeight + 600;

  const pan = Gesture.Pan()

    .onBegin(() => {
      cancelAnimation(scrollY);
    })
    .onStart(() => {
      console.log("panning start");
    })

    .onChange((event) => {
      scrollY.value = clamp(scrollY.value - event.changeY, 0, maxScrollY);

      console.log("Scroll ", scrollY.value);
    })
    .onEnd((event) => {
      scrollY.value = withClamp(
        { min: 0, max: maxScrollY },
        withDecay({ velocity: -event.velocityY })
      );
    });

  return (
    <GestureDetector gesture={pan}>
      <View
        style={{ padding: 10 }}
        onLayout={(event) => setListHeight(event.nativeEvent.layout.height)}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            scrollY={scrollY}
            activeCardIndex={activeCardIndex}
          />
        ))}
      </View>
    </GestureDetector>
  );
};

export default CardsList;
