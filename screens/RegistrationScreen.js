import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome,</Text>
      <TextInput placeholder="First Name" style={styles.input} />
      <TextInput placeholder="Last Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Phone Number" style={styles.input} />
      <TextInput placeholder="Organization" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});

export default RegistrationScreen;
