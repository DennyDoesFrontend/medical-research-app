// ChatBubble.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const ChatBubble = ({ role, text, onSpeech }) => {
  return (
    <View style={role === "user" ? styles.userChatItem : styles.modelChatItem}>
      <Text style={styles.chatText}>{text}</Text>
      {role === "model" && (
        <TouchableOpacity onPress={onSpeech}>
          <Ionicons
            name="ios-volume-high"
            size={20}
            color="black"
            style={styles.speechIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  userChatItem: {
    backgroundColor: "#DCF8C6",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  modelChatItem: {
    backgroundColor: "#EAEAEA",
    padding: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  chatText: {
    fontSize: 16,
  },
  speechIcon: {
    marginLeft: 5,
  },
});

export default ChatBubble;
