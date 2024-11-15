import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Presentation</Text>
      <Text>Date: 16 July 2020</Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>BOOK</Text>
      </TouchableOpacity>
      <Text style={styles.subTitle}>Location</Text>
      {/* Insert map view here */}
      <View style={styles.mapPlaceholder}>
        <Text>Map Placeholder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bookButton: { backgroundColor: '#2196F3', padding: 15, borderRadius: 5, marginTop: 20 },
  bookButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  subTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  mapPlaceholder: { height: 200, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' },
});

export default BookingScreen;
