import React from "react";
import { View } from "react-native";

import Note from "./Note";

Notes = ({ notesList }) => {
  let lastItem = notesList.length - 1;
  return (
    <View style={styles.container}>
      {notesList.map((val, i) => {
        return <Note lastItem={lastItem} key={i} value={val} position={i} />;
      })}
    </View>
  );
};

const styles = {
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15
  }
};

export default Notes;
