import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
      <Text>Phone: +123456789</Text>
      <Text>Organization: Company XYZ</Text>
      {/* You can add more profile details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default ProfileScreen;
