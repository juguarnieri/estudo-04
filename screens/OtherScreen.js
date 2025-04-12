import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  SectionList,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

// FlatList Data
const data = [
  { id: '1', title: 'Item 1', image: 'https://via.placeholder.com/100' },
  { id: '2', title: 'Item 2', image: 'https://via.placeholder.com/100' },
  { id: '3', title: 'Item 3', image: 'https://via.placeholder.com/100' },
  { id: '4', title: 'Item 4', image: 'https://via.placeholder.com/100' },
];

// SectionList Data
const sectionData = [
  {
    title: 'Frutas A',
    data: [
      { id: '1', title: 'Apple' },
      { id: '2', title: 'Avocado' },
    ],
  },
  {
    title: 'Frutas B',
    data: [
      { id: '3', title: 'Banana' },
      { id: '4', title: 'Blueberry' },
    ],
  },
];

export default function App() {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Página Bonita com Listas & Componentes</Text>
      <Image
  source={{ uri: 'https://picsum.photos/400/200' }}
  style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 20 }}
/>

      <TextInput
        style={styles.input}
        placeholder="Digite algo aqui"
        value={input}
        onChangeText={setInput}
      />

      <Button title="Enviar" onPress={() => alert(`Você digitou: ${input}`)} />

      {/* FlatList com Card */}
      <Text style={styles.subTitle}>FlatList (Cards com imagem):</Text>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => alert(`Você clicou em ${item.title}`)}
            >
              <Text style={styles.cardButtonText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      {/* SectionList */}
      <Text style={styles.subTitle}>SectionList:</Text>
      <ScrollView style={styles.listContainer}>
        <SectionList
          sections={sectionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>🍓 {item.title}</Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </ScrollView>

      {/* FlatList vertical simples */}
      <Text style={styles.subTitle}>Lista Vertical:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.simpleItem}>
            <Text style={styles.simpleText}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6',
    padding: 16,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d1009f',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: '#b3007d',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: '#d1009f',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  listContainer: {
    maxHeight: 200,
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#ffd6ef',
    borderRadius: 6,
    marginVertical: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ff4db8',
    color: 'white',
    padding: 8,
    borderRadius: 6,
  },
  card: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d1009f',
    textAlign: 'center',
  },
  cardButton: {
    marginTop: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#ff66c4',
    borderRadius: 10,
  },
  cardButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  simpleItem: {
    backgroundColor: '#ffccf2',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  simpleText: {
    fontSize: 16,
    color: '#800040',
  },
  bannerImage: {
    width: '50%',
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  
});

//<Image source={{ uri: 'https://picsum.photos/400/200' }} style={styles.bannerImage} />
