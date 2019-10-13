import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default Input = props => {
  return (
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    width: "100%"
  },
  input: {
    width: "100%",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: "#ddd",
    borderRadius: 3
  }
});
