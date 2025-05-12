import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { GameLevel } from '@/types/game';
import { Check, Lock } from 'lucide-react-native';

type LevelSelectorProps = {
  levels: GameLevel[];
  onLevelSelect: (levelId: string) => void;
};

export default function LevelSelector({
  levels,
  onLevelSelect,
}: LevelSelectorProps) {
  const renderLevelItem = ({ item, index }: { item: GameLevel; index: number }) => {
    const isLocked = index > 0 && !levels[index - 1].completed;

    return (
      <TouchableOpacity
        style={[
          styles.levelCard,
          item.completed && styles.levelCompleted,
          isLocked && styles.levelLocked,
        ]}
        onPress={() => !isLocked && onLevelSelect(item.id)}
        disabled={isLocked}>
        <View style={styles.levelHeader}>
          <Text style={styles.levelName}>{item.name}</Text>
          <View style={styles.difficultyBadge}>
            <Text style={styles.difficultyText}>{item.difficulty}</Text>
          </View>
        </View>

        {item.completed ? (
          <View style={styles.completedBadge}>
            <Check size={20} color="#FFFFFF" />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        ) : isLocked ? (
          <View style={styles.lockedOverlay}>
            <Lock size={32} color="#9E9E9E" />
            <Text style={styles.lockedText}>Complete previous level</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Level</Text>
      <FlatList
        data={levels}
        renderItem={renderLevelItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.levelsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 24,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 24,
  },
  levelsList: {
    paddingBottom: 24,
  },
  levelCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  levelCompleted: {
    borderLeftWidth: 8,
    borderLeftColor: '#4CAF50',
  },
  levelLocked: {
    opacity: 0.7,
  },
  levelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  levelName: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 20,
    color: '#333333',
  },
  difficultyBadge: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  difficultyText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: '#757575',
    textTransform: 'capitalize',
  },
  completedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  completedText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
  lockedOverlay: {
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
  lockedText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#9E9E9E',
    marginTop: 8,
  },
});