import { StyleSheet } from "react-native";

export const ButtonStyles = StyleSheet.create({
    btn: {
      width: 70,
      height: 70,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      borderColor: "black",
      shadowColor: "black",
      elevation: 10,
      margin: 10,
    },
    buttonTxt: {
      fontSize: 30,
      color: "white",
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      maxWidth: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  