import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FamosoItem({ image, name }) {
  return (
    <View style={styles.container}>
    
      <Image source={image} style={styles.image} />
      <Text style={styles.name} numberOfLines={2}>{name}</Text>
      <Text style={styles.tag}>Patrocinado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
    marginRight: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    marginBottom: 4,
  },
  name: {
    fontSize: 11,
    textAlign: 'center',
  },
  tag: {
    fontSize: 10,
    color: 'gray',
  },
});
