import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { LightBulb } from 'lucide-react-native';

type CluePanelProps = {
  clues: string[];
  revealedClues: number;
  onRevealClue: () => void;
};

export default function CluePanel({
  clues,
  revealedClues,
  onRevealClue,
}: CluePanelProps) {
  const renderClue = ({ item, index }: { item: string; index: number }) => {
    if (index < revealedClues) {
      return (
        <View style={styles.clueItem}>
          <View style={styles.clueNumberContainer}>
            <Text style={styles.clueNumber}>{index + 1}</Text>
          </View>
          <Text style={styles.clueText}>{item}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <LightBulb size={24} color="#FFC107" style={styles.icon} />
        <Text style={styles.title}>Clues</Text>
      </View>

      <View style={styles.cluesContainer}>
        {revealedClues === 0 ? (
          <Text style={styles.noCluesText}>
            No clues revealed yet. Tap the button below to reveal your first clue!
          </Text>
        ) : (
          <FlatList
            data={clues}
            renderItem={renderClue}
            keyExtractor={(item, index) => `clue-${index}`}
            scrollEnabled={false}
          />
        )}
      </View>

      {revealedClues < clues.length && (
        <TouchableOpacity style={styles.revealButton} onPress={onRevealClue}>
          <Text style={styles.revealButtonText}>
            {revealedClues === 0
              ? 'Get First Clue'
              : 'Get Another Clue'}
          </Text>
        </TouchableOpacity>
      )}

      {revealedClues > 0 && revealedClues < clues.length && (
        <Text style={styles.hintText}>
          {clues.length - revealedClues} more {revealedClues === 1 ? 'clue' : 'clues'} available
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 20,
    color: '#FFC107',
  },
  cluesContainer: {
    minHeight: 80,
    marginBottom: 16,
  },
  noCluesText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#9E9E9E',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  clueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#F9F7F0',
    borderRadius: 12,
    padding: 12,
  },
  clueNumberContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  clueNumber: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  clueText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  revealButton: {
    backgroundColor: '#FFC107',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  revealButtonText: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  hintText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#9E9E9E',
    textAlign: 'center',
    marginTop: 8,
  },
});