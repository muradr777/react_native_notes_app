import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default Note = ({ value, position, lastItem }) => {
  return (
    <View
      style={
        position !== lastItem
          ? [styles.noteItem, styles.bottomSpace]
          : styles.noteItem
      }
    >
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#ddd"
  },
  bottomSpace: {
    marginBottom: 15
  }
});
