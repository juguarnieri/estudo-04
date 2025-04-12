import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LojaItem({
  image,
  name,
  type,
  distance,
  rating,
  time,
  price,
  isFavorite = false,
}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.logo} />

      <View style={styles.info}>
        <Text style={styles.patrocinado}>Patrocinado</Text>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.details}>{rating} ★ · {type} · {distance}</Text>
        <Text style={styles.delivery}>{time} · {price}</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  patrocinado: {
    fontSize: 11,
    color: '#999',
    marginBottom: 2,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  delivery: {
    fontSize: 12,
    color: '#4CAF50',
  },
  icon: {
    marginLeft: 10,
  },
});
