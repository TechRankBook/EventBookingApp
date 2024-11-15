import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [events, setEvents] = useState([
    { id: '1', name: 'Project Presentation', date: '16 July 2020' },
    { id: '2', name: 'Music Concert', date: '10 March 2021' },
    { id: '3', name: 'Art Exhibition', date: '05 June 2021' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Events</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>{item.name}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  eventItem: { padding: 15, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10 },
  eventTitle: { fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
