import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Animal } from '@/types/game';
import { X, Check } from 'lucide-react-native';

type AnimalChoicesProps = {
  animals: Animal[];
  onEliminateAnimal: (animalId: string) => void;
  onGuessAnimal: (animalId: string) => void;
  gameStatus: 'playing' | 'success' | 'failure' | 'complete';
};

export default function AnimalChoices({
  animals,
  onEliminateAnimal,
  onGuessAnimal,
  gameStatus,
}: AnimalChoicesProps) {
  const renderAnimalItem = ({ item }: { item: Animal }) => {
    const isDisabled = item.eliminated || gameStatus !== 'playing';

    return (
      <View style={[styles.animalCard, item.eliminated && styles.animalDisabled]}>
        <Image
          source={{ uri: item.animalImage }}
          style={styles.animalImage}
          resizeMode="cover"
        />
        <Text style={styles.animalName}>{item.name}</Text>

        {gameStatus === 'playing' && !item.eliminated && (
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[styles.actionButton, styles.eliminateButton]}
              onPress={() => onEliminateAnimal(item.id)}>
              <X size={16} color="#FFFFFF" />
              <Text style={styles.buttonText}>Not This</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.guessButton]}
              onPress={() => onGuessAnimal(item.id)}>
              <Check size={16} color="#FFFFFF" />
              <Text style={styles.buttonText}>It's This!</Text>
            </TouchableOpacity>
          </View>
        )}

        {item.eliminated && (
          <View style={styles.eliminatedOverlay}>
            <X size={32} color="#FF6B6B" />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animal Choices</Text>
      <FlatList
        data={animals}
        renderItem={renderAnimalItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.animalRow}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 16,
  },
  animalRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  animalCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  animalDisabled: {
    opacity: 0.7,
  },
  animalImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  animalName: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 8,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 2,
  },
  eliminateButton: {
    backgroundColor: '#FF6B6B',
  },
  guessButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 2,
  },
  eliminatedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});