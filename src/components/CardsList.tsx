import { View, Image } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";
const cards = [
  require("../../assets/cards/Card_1.png"),
  require("../../assets/cards/Card_2.png"),
  require("../../assets/cards/Card_3.png"),
  require("../../assets/cards/Card_4.png"),
  require("../../assets/cards/Card_5.png"),
  require("../../assets/cards/Card_6.png"),
  require("../../assets/cards/Card_7.png"),
  require("../../assets/cards/Card_8.png"),
  require("../../assets/cards/Card_9.png"),
];

const CardsList = () => {
  const scrollY = useSharedValue(0);
  const pan = Gesture.Pan()
    .onStart(() => {
      console.log("panning start");
    })
    .onChange((event) => {
      console.log("panning.scrolled on Y: ", event.changeY);

      scrollY.value = scrollY.value - event.changeY;
    })
    .onEnd(() => {
      console.log("panning ended");
    });

  return (
    <GestureDetector gesture={pan}>
      <View style={{ padding: 10 }}>
        {cards.map((card, index) => (
          <Animated.Image
            key={index}
            source={card}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 7 / 4,
              marginVertical: 5,
              transform: [
                {
                  translateY: scrollY,
                },
              ],
            }}
          />
        ))}
      </View>
    </GestureDetector>
  );
};

export default CardsList;
