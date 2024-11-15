import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Please provide your email address to recover your account.</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { textAlign: 'center', color: '#888', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});

export default ForgotPasswordScreen;
