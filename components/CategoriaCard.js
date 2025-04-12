// src/components/CardCategoria.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardCategoria({ icon, label }) {
  return (
    <View style={styles.cardCategoria}>
      <Image source={icon} style={styles.categoriaIcon} />
      <Text style={styles.categoriaLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCategoria: {
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  categoriaIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 6,
  },
  categoriaLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
