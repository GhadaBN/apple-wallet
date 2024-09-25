import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Wallet</Text>
      <View style={styles.iconsContainer}>
        <Icon name="cube-outline" size={31} color="black" />
        <Icon
          name="add-circle-outline"
          size={34}
          color="black"
          style={styles.icon}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    paddingBottom: 25,
    paddingTop: 35,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 90,
  },
  icon: {
    marginRight: 16,
  },
});

export default Header;
