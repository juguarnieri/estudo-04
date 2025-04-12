// src/components/CardRepetido.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardRepetido({ image, name, lastOrder }) {
  return (
    <View style={styles.cardBase}>
      <Image source={image} style={styles.avatar} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubtitle}>{lastOrder}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBase: {
    width: 120,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 12,
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 6,
  },
});
