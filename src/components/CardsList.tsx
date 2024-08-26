import { Text, View, Image } from "react-native";
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
  return (
    <View>
      <Image source={cards[0]} style={{ width: "100%", height: undefined, aspectRatio: 7 / 4 }} />
    </View>
  );
};

export default CardsList;
