// screens/DetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/image.png')} style={styles.mainImage} />

      <View style={styles.content}>
        <Text style={styles.title}>Feijoada Completa</Text>
        <Text style={styles.description}>
          Uma deliciosa feijoada caseira com arroz, couve e laranja. Servida com amor!
        </Text>

        <View style={styles.detailsRow}>
          <Text style={styles.detailText}>⏱️ 40-50 min</Text>
          <Text style={styles.detailText}>💸 R$ 29,90</Text>
        </View>

        <Text style={styles.sectionTitle}>Ingredientes:</Text>
        <Text>- Feijão preto{'\n'}- Linguiça{'\n'}- Costelinha{'\n'}- Arroz branco{'\n'}- Couve refogada{'\n'}- Laranja</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  mainImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    color: '#555',
  },
  detailsRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    fontSize: 14,
    color: '#333',
  },
  sectionTitle: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailsScreen;
