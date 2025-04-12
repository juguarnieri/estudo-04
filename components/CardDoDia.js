// src/components/CardDoDia.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardDoDia({ image, title, discount, time }) {
  return (
    <View style={styles.cardBase}>
      <Image source={image} style={styles.promoImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{discount} • {time}</Text>
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
  promoImage: {
    width: 100,
    height: 60,
    borderRadius: 8,
  },
});
