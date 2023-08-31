/** @format */

import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Input, Button, View, Text, Box } from "native-base";
import { TextInput } from "react-native-element-textinput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../Constants";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAction";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userRef, setUserRef] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert("Please fill the required fields");
    }
    password !== confirmPassword && Alert.alert("Password not match");

    const newUser = {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      userRef,
      password,
      confirmPassword,
    };

    dispatch(register(newUser));
  };

  return (
    <Box flex={1} background="white">
      <Box paddingX={4} paddingY={4}>
        <Box marginTop={4} paddingY={4}>
          <TextInput
            value={firstName}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Firstname"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setFirstName(text);
            }}
          />
          <TextInput
            value={lastName}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Lastname"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setLastName(text);
            }}
          />
          <TextInput
            value={username}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Username"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            value={email}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Email"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            value={phoneNumber}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Phone Number"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
          />
          <TextInput
            value={userRef}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Referal Code (Optional)"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setUserRef(text);
            }}
          />
          <TextInput
            mode="password"
            value={password}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Password"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
          <TextInput
            mode="password"
            value={confirmPassword}
            style={styles.input}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            placeholderStyle={styles.placeholderStyle}
            textErrorStyle={styles.textErrorStyle}
            label="Confirm Password"
            placeholderTextColor="gray"
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
          />
          <View marginTop={5}>
            <TouchableOpacity
              onPress={onSubmit}
              style={{
                padding: 13,
                backgroundColor: Colors.primary,
                borderRadius: 10,
              }}>
              <Text
                textAlign="center"
                fontSize={18}
                fontWeight={700}
                color="white">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: "coral",
    borderWidth: 1.5,
    backgroundColor: "white",
    shadowColor: "#c2c2c2",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 10,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 12,
    position: "absolute",
    top: -10,
    backgroundColor: "white",
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
});
