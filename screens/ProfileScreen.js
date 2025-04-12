import React, { useState } from 'react';
import { SafeAreaView, ScrollView, FlatList, SectionList, Text, StyleSheet, Image, View } from 'react-native';
import InputText from '../components/InputText';
import Card2 from '../components/Card2';
import CardCategoria from '../components/CardCategoria';

const ProfileScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ];

  const sectionData = [
    {
      title: 'Seção A',
      data: [
        { id: '1', title: 'Abacate' },
        { id: '2', title: 'Ameixa' },
      ],
    },
    {
      title: 'Seção B',
      data: [
        { id: '3', title: 'Banana' },
        { id: '4', title: 'Bergamota' },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Pôster */}
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-umpDh5RJAn-Ec-SbQ4A40f9X1ynKfFpwkw&s' }}
          style={styles.poster}
        />

        {/* Explicação */}
        <Text style={styles.title}>Explicação da Tela</Text>
        <View style={styles.boxInfo}>
          <Text style={styles.info}>📌 SafeAreaView → Garante que o conteúdo fique dentro da área segura</Text>
          <Text style={styles.info}>📜 ScrollView → Área de rolagem</Text>
          <Text style={styles.info}>📋 FlatList → Lista otimizada para grandes quantidades de dados</Text>
          <Text style={styles.info}>📂 SectionList → Lista otimizada para seções de dados</Text>
        </View>

        {/* Inputs */}
        <View style={styles.inputArea}>
          <InputText label="Nome" placeholder="Digite seu nome" value={nome} onChangeText={setNome} />
          <InputText label="Email" placeholder="Digite seu email" value={email} onChangeText={setEmail} />
        </View>

        {/* Scroll horizontal com CardCategoria */}
        <Text style={styles.subTitle}>Categorias:</Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardCategoria title={item.title} />}// Para cada item na lista, renderiza um componente CardCategoria, passando o título do item.
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />

        {/* FlatList vertical */}
        <Text style={styles.subTitle}>Lista Vertical (FlatList):</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card2 title={item.title} />}
          scrollEnabled={false}
        />

        {/* SectionList */}
        <Text style={styles.subTitle}>Lista em Seções (SectionList):</Text>
        <SectionList
          sections={sectionData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card2 title={item.title} />}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8fc',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  poster: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d60087',
    textAlign: 'center',
    marginTop: 20,
  },
  boxInfo: {
    backgroundColor: '#fde1f0',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#d60087',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  info: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  inputArea: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#d60087',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  horizontalList: {
    paddingLeft: 10,
    gap: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#d60087',
    color: '#fff',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});
