// src/components/Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Card({ image, name, rating, time, price }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.row}>
          <Icon name="star" size={14} color="#FFC107" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>{time} • {price}</Text>
      </View>
      <TouchableOpacity style={styles.heart}>
        <Icon name="heart-outline" size={20} color="#000" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 100,
  },
  info: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    marginTop: 4,
    fontWeight: '600',
  },
  details: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  heart: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
});
