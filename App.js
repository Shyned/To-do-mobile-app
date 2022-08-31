import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const [goalEntry, setGoalEntry] = useState("");

  const [goalList, setGoalList] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalEntry(enteredText);
  }
  function addGoalHandler() {
    if (goalEntry !== "") {
      setGoalList((upadtelist) => [...goalList, goalEntry]);
    } else {
      Alert.alert("Can't enter an empty item");
    }
  }
  function clearList() {
    setGoalList([]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCotainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalList.map((goal, index) => {
          return (
            <View style={styles.goalItem} key={index + 1}>
              <Text style={styles.goalText}>{goal} </Text>
              <Button title="X" />
            </View>
          );
        })}
      </View>
      <Button title="clear" onPress={clearList}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputCotainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#a2a2a2",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#c0c0c0",
    width: "70%",
    marginRight: 5,
    width: "80%",
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#2acc0a",
  },
  goalText: {
    color: "#ffffff",
  },
});
