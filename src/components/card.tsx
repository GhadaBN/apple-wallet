import { Animated } from "react-native";

const Card = ({ card, index, scrollY }) => {
  return (
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
  );
};
export default Card;
