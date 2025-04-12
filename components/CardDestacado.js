// src/components/CardDestacado.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CardDestacado({ image, avatar, name, rating, time, price }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.ratingBadge}>
          <Icon name="star" size={12} color="#fff" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <TouchableOpacity style={styles.heart}>
          <Icon name="heart-outline" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.nameRow}>
          <Image source={avatar} style={styles.avatar} />
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
        </View>

        <Text style={styles.details}>
          {time} •{' '}
          {price.toLowerCase() === 'grátis' ? (
            <Text style={styles.free}>{price}</Text>
          ) : (
            price
          )}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

// styles (mesmos que você já tem)

const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginRight: 12,
  },
  imageContainer: {
    position: 'relative',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
  },
  ratingBadge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 3,
  },
  heart: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 4,
  },
  info: {
    padding: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  avatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 6,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    flexShrink: 1,
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  free: {
    color: '#28a745',
    fontWeight: 'bold',
  },
});
