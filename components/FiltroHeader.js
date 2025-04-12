import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function FiltroHeader({ filtro }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {filtro.map((item, index) => (
        <View key={index} style={styles.filtroItem}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingLeft: 12,
  },
  filtroItem: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
});
