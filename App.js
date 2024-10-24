import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const initialState = { count: 10, secondCount: 20, thirdCount: 30 };
const reducer = (state, action) => {
  //Noi cai dat cac logic cho cac thay doi phuc tap lien quan den state trong
  //chuong trinh. Giup tap trung hoa cac xu ly lien quan den state => maintainance
  //de hon
  //Viec xu ly cac stat ntn thong qua cac thong tin dc dispatch thong qua action
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload,
      }; //New state
    case "decrement":
      return {
        ...state,
        secondCount: state.secondCount - action.payload,
      }; //New state
    default:
      return state;
  }
};

export default function App() {
  //Su dung reducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text>
        Count: {state.count}, secondCount: {state.secondCount}, thirdCount:{" "}
        {state.thirdCount}
      </Text>
      <Button
        title="+"
        onPress={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      ></Button>
      <Button
        title="-"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
