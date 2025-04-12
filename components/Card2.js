import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card2({ titulo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.texto}>📦 {titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e19fcb',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});
