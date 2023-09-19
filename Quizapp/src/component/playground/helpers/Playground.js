import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { firebase } from "../../../../config/config";
const Playground = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOpations, setSelectedOpations] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const route = useRoute();

  // Access the parameters from the route object
  const { category } = route.params;

  useEffect(() => {
    getQuestions();
  }, []);
  const getQuestions = async () => {
    setSelectedOpations({});
    setShowResults(false);
    const db = firebase.firestore();
    const questionsRef = db.collection("question");
    console.log("questions==>", questionsRef);
    const snapshot = await questionsRef.where("category", "==", category).get();
    console.log("snapshot==>", snapshot);
    if (snapshot.empty) {
      console.log("No matching documents...");
      return;
    }
    const allQuestions = snapshot.docs.map((doc) => doc.data());
    const shuffleQuestions = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffleQuestions.slice(0, 10));
  };
  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOpations({
      ...selectedOpations,
      [questionIndex]: option,
    });
  };
  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (selectedOpations?.[index] === question?.correctOption) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.questionContainer}>
            {console.log("item", item)}
            <Text style={styles.question}>{item?.question}</Text>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOpations[index] === 1 && styles.selectedOpations,
                showResults && item.correctOption === 1 && styles.correctOption,
                showResults &&
                  selectedOpations[index] === 1 &&
                  selectedOpations[index] !== item?.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 1)}
              disabled={showResults}
            >
              <Text>{item?.option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOpations?.[index] === 2 && styles.selectedOpations,
                showResults && item.correctOption === 2 && styles.correctOption,
                showResults &&
                  selectedOpations?.[index] === 2 &&
                  selectedOpations?.[index] !== item?.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 2)}
              disabled={showResults}
            >
              <Text>{item?.option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOpations[index] === 3 && styles.selectedOpations,
                showResults &&
                  item?.correctOption === 3 &&
                  styles.correctOption,
                showResults &&
                  selectedOpations[index] === 3 &&
                  selectedOpations[index] !== item?.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 3)}
              disabled={showResults}
            >
              <Text>{item?.option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                selectedOpations[index] === 4 && styles.selectedOpations,
                showResults &&
                  item?.correctOption === 4 &&
                  styles.correctOption,
                showResults &&
                  selectedOpations[index] === 4 &&
                  selectedOpations[index] !== item?.correctOption &&
                  styles.wrongOption,
              ]}
              onPress={() => handleOptionSelect(index, 4)}
              disabled={showResults}
            >
              <Text>{item?.option4}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      {!showResults ? <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
        disabled={showResults}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity> : ''}
      {showResults && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Second {score} out of {questions.length}
          </Text>
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={getQuestions}
          >
            <Text style={styles.tryAgainButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  option: {
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedOpations: {
    backgroundColor: "#949494",
  },
  correctOption: {
    backgroundColor: "green",
  },
  wrongOption: {
    backgroundColor: "red",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  result: {
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  tryAgainButton: {
    backgroundColor: "blue",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  tryAgainButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});
export default Playground;
