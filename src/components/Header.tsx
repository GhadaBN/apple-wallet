import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Wallet</Text>
      <View style={styles.iconsContainer}>
        <Icon name="cube-outline" size={25} color="black" />
        <Icon
          name="add-circle-outline"
          size={28}
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
    paddingBottom: 10,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
  },
  icon: {
    marginRight: 16,
  },
});

export default Header;
