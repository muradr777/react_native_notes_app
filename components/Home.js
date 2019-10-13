import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Input from "./Input";
import Notes from "./Notes/NotesList";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      notes: [
        "lorem10lo orem10lore  orem10lore orem10lorem101111",
        "lorem10lo orem10lore orem10lorem10",
        "lorem10lo orem10lore orem10lorem10 orem10lore orem10lorem10"
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headArea}>
          <Text style={styles.headTxt}>NotesApp</Text>
        </View>
        <View style={styles.inputArea}>
          <Input placeholder="Type your note" addNote={this.addNote} />
          <View style={styles.buttonSubmit}>
            <Button title="Submit" />
          </View>
        </View>
        <Notes notesList={this.state.notes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  headArea: {
    width: "100%",
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#055864"
  },
  inputArea: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 15
  },
  headTxt: {
    color: "#fff",
    fontSize: 24
  },
  buttonSubmit: {
    marginTop: 10
  }
});

export default Home;
