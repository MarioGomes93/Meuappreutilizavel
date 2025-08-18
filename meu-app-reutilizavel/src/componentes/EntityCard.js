// src/components/EntityCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// O componente recebe 'props' para se tornar parametrizável
const EntityCard = ({ title, description, imageUrl, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      {imageUrl && (
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image} 
          resizeMode="cover" 
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {/* 'children' é como um 'slot', permitindo injetar conteúdo personalizado */}
        {children && <View style={styles.footer}>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
});

export default EntityCard;