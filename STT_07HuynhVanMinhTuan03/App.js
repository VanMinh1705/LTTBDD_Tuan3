import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import img from "./assets/Ellipse8.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.img} source={img} />
        <Text style={styles.text}>GROW {"\n"}YOUR BUSINESS</Text>
        <Text style={styles.textDes}>
          We will help you to grow your business using online server
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSign}>
            <Text style={styles.buttonText}> Sign up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 360, // Adjust the width as needed
    height: 640, // Adjust the height as needed
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.58) 30%, rgba(0, 204, 249, 0.70) 49%, rgba(0, 204, 249, 0.36) 71%, #00CCF9 100%)",
  },
  img: {
    width: 140, // Adjust the width as needed
    height: 140, // Adjust the height as needed
    alignSelf: "center",
    marginTop: 105,
  },
  text: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginTop: 52,
  },
  textDes: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginTop: 62,
  },
  buttonContainer: {
    flexDirection: "row", // Đặt hàng ngang cho nút
    justifyContent: "center", // Để căn giữa nút theo chiều ngang
    marginTop: 45, // Thêm khoảng cách từ nút lên trên
  },
  buttonLogin: {
    width: 119, // Adjust the width as needed
    height: 48, // Adjust the height as needed
    backgroundColor: "#E3C000",
    borderRadius: 10,
    flexDirection: "row",
    marginRight: 27,
    justifyContent: "center",
  },
  buttonSign: {
    width: 119, // Adjust the width as needed
    height: 48, // Adjust the height as needed
    backgroundColor: "#E3C000",
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: 37,
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textAlign: "center",
    marginTop: 13,
  },
});
