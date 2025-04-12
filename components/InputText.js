import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function InputText({ label, placeholder, value, onChangeText, secureTextEntry = false }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#ff00a8',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ff00a8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
});
