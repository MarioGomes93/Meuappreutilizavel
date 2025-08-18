// App.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button, Alert } from 'react-native';
import EntityCard from './src/components/EntityCard'; // Importe o componente

export default function App() {
  const handleCardPress = (entityType) => {
    Alert.alert(`Você clicou em ${entityType}!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Catálogo de Produtos</Text>
      
      {/* Exemplo de Reutilização 1: Cartão de Produto */}
      <EntityCard
        title="Bolsa de Couro Artesanal"
        description="Feita à mão com couro legítimo e detalhes exclusivos."
        imageUrl="https://picsum.photos/id/1015/400/250"
        onPress={() => handleCardPress('Produto')}
      >
        <Button 
          title="Ver Detalhes" 
          onPress={() => handleCardPress('Produto')} 
          color="#007BFF" 
        />
      </EntityCard>

      <Text style={styles.heading}>Perfil dos Artesãos</Text>
      
      {/* Exemplo de Reutilização 2: Cartão de Artesão */}
      <EntityCard
        title="Maria da Silva"
        description="Especialista em cerâmica com mais de 20 anos de experiência."
        imageUrl="https://picsum.photos/id/1011/400/250"
        onPress={() => handleCardPress('Artesão')}
      >
        <Button 
          title="Ver Perfil" 
          onPress={() => handleCardPress('Artesão')} 
          color="#28A745" 
        />
      </EntityCard>

      <Text style={styles.heading}>Notificações</Text>
      
      {/* Exemplo de Reutilização 3: Cartão de Notificação (sem imagem e com conteúdo customizado) */}
      <EntityCard
        title="Promoção relâmpago!"
        description="Desconto de 20% em todos os produtos de cerâmica."
        onPress={() => handleCardPress('Notificação')}
      >
        <View style={styles.customNotification}>
          <Text style={styles.notificationText}>Válido apenas hoje!</Text>
          <Button 
            title="Resgatar Agora" 
            onPress={() => handleCardPress('Promoção')} 
            color="#DC3545" 
          />
        </View>
      </EntityCard>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 5,
  },
  customNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationText: {
    color: '#DC3545',
    fontWeight: 'bold',
  },
});