import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Quiz = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("PlaygroundMain", { category: "world-affairs" })
          }
        >
          <Text style={styles.categoryTitle}>World Affairs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("PlaygroundMain", { category: "science" })
          }
        >
          <Text style={styles.categoryTitle}>Science & Technology </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("PlaygroundMain", { category: "technology" })
          }
        >
          <Text style={styles.categoryTitle}> Computer Science </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  category: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
});
export default Quiz;
