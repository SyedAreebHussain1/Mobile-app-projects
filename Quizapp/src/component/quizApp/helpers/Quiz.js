import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Quiz = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.text}>

        <Text style={styles.welcomeText}>{`Start Quiz ${userName}`}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("Play Now", { category: "world-affairs" })
          }
        >
          <Text style={styles.categoryTitle}>World Affairs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("Play Now", { category: "science" })
          }
        >
          <Text style={styles.categoryTitle}>Science & Technology </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.category}
          onPress={() =>
            navigation.navigate("Play Now", { category: "technology" })
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
  text: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
export default Quiz;
