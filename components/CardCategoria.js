import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CardCategoria({ titulo }) {
  return (
    <View style={styles.card}>
      <MaterialIcons name="category" size={24} color="#fff" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ff00a8',
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  texto: {
    marginTop: 6,
    fontSize: 14,
    color: '#fff',
  },
});

