import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  BackHandler,
} from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import { Snackbar } from "react-native-paper";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [chat, setChat] = useState(null);
  const API_KEY = "AIzaSyAyCVbeWfI8dI4xAxzZRc4xx5ZgzqtC0os";

  const navigation = useNavigation();
  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      // Initialize the GoogleGenerativeAI instance
      const genAI = new GoogleGenerativeAI(API_KEY);
      startChat(genAI);

      const routes = navigation.getState()?.routes;
      const previousRoute = routes[routes.length - 2]?.name;

      const onBackPress = () => {
        if (previousRoute === "camera") {
          const handleCameraResetNav = () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "camera" }],
              })
            );
          };
          handleCameraResetNav();
          return true;
        }
        return false;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  // Inside startChat function
  const startChat = async (genAI) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      // Start a new chat session
      const chatInstance = model.startChat({
        history: [
          // Initial user message here
          {
            role: "user",
            parts: [{ text: "Hello" }],
          },
          // Initial model response here
          {
            role: "model",
            parts: [
              { text: "Great to meet you. What would you like to know?" },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      // Update chat instance in state here
      setChat(chatInstance);

      return chatInstance; // Return the chat instance
    } catch (error) {
      console.error("Error starting chat:", error);
      setErrorMessage("An error occurred while starting the chat.");
      return null; // Return null if chat instance initialization fails
    }
  };

  // Inside sendMessage function
  const sendMessage = async (message) => {
    try {
      setLoading(true);

      // Check if chat instance is available
      if (!chat) {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const chatInstance = await startChat(genAI);
        if (!chatInstance)
          throw new Error("Failed to initialize chat instance.");
        // Set the chat instance obtained from startChat
        setChat(chatInstance);
      }

      // Ensure chat instance is not null before sending message
      if (chat) {
        // Send user message with a timeout, Reply 'Timeout...' when model doesn't respond
        const result = await Promise.race([
          chat.sendMessage(message),
          new Promise(
            (_, reject) =>
              setTimeout(
                () => reject(new Error("Timeout while waiting for response")),
                10000
              ) // 10-second timeout here XD
          ),
        ]);

        const response = await result.response;
        const modelResponse = response.text();

        // Check if modelResponse is empty
        if (modelResponse.trim() === "") {
          throw new Error("No response from the AI.");
        }

        // Update chat history with user message and model response
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: "user", text: message },
          { role: "model", text: modelResponse },
        ]);

        setLoading(false);
      } else {
        // If chat is null, log an error
        throw new Error("Chat instance is not initialized.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      if (
        error.message === "Timeout while waiting for response" ||
        error.message === "No response from the AI."
      ) {
        // Reset chat if there is a timeout or no response from the AI
        setChat(null);
      } else {
        setErrorMessage("An error occurred while sending the message.");
      }
      setLoading(false);
    }
  };
  const renderChatItem = ({ item }) => {
    return (
      <View
        style={
          item.role === "user" ? styles.userChatItem : styles.modelChatItem
        }
      >
        <Text style={styles.chatText}>{item.text}</Text>
        {item.role === "model" && <TouchableOpacity></TouchableOpacity>}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={chatHistory}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
          }}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Type your message..."
        />
        <TouchableOpacity
          style={{
            marginLeft: 10,
            padding: 10,
            backgroundColor: "#6495ED",
            borderRadius: 8,
          }}
          onPress={() => {
            if (userInput.trim() !== "") {
              sendMessage(userInput);
              setUserInput("");
            }
          }}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      {errorMessage && (
        <Text style={{ color: "red", marginTop: 10 }}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default Chatbot;

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
