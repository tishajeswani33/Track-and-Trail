import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useGame } from '@/context/GameContext';
import LevelSelector from './LevelSelector';
import PawPrintDisplay from './PawPrintDisplay';
import CluePanel from './CluePanel';
import AnimalChoices from './AnimalChoices';
import ResultModal from './ResultModal';

export default function GameScreen() {
  const { state, dispatch } = useGame();
  const [showLevelSelector, setShowLevelSelector] = useState(true);

  useEffect(() => {
    if (state.currentLevel === null && !showLevelSelector) {
      setShowLevelSelector(true);
    }
  }, [state.currentLevel]);

  const handleLevelSelect = (levelId: string) => {
    dispatch({ type: 'START_LEVEL', payload: { levelId } });
    setShowLevelSelector(false);
  };

  const handleNextLevel = () => {
    dispatch({ type: 'NEXT_LEVEL' });
  };

  const handleRevealClue = () => {
    dispatch({ type: 'REVEAL_CLUE' });
  };

  const handleEliminateAnimal = (animalId: string) => {
    dispatch({ type: 'ELIMINATE_ANIMAL', payload: { animalId } });
  };

  const handleGuessAnimal = (animalId: string) => {
    dispatch({ type: 'GUESS_ANIMAL', payload: { animalId } });
  };

  const handlePlayAgain = () => {
    if (state.gameStatus === 'complete') {
      dispatch({ type: 'RESET_GAME' });
      setShowLevelSelector(true);
    } else {
      handleNextLevel();
    }
  };

  if (showLevelSelector) {
    return <LevelSelector levels={state.levels} onLevelSelect={handleLevelSelect} />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Score: {state.score}</Text>
      </View>

      {state.currentLevel && (
        <>
          <Text style={styles.levelTitle}>{state.currentLevel.name}</Text>
          <PawPrintDisplay
            pawPrintImage={
              state.currentLevel.animals.find(
                (animal) => animal.id === state.currentLevel?.correctAnimalId
              )?.pawPrintImage || ''
            }
          />
          <CluePanel
            clues={
              state.currentLevel.animals.find(
                (animal) => animal.id === state.currentLevel?.correctAnimalId
              )?.clues || []
            }
            revealedClues={state.revealedClues}
            onRevealClue={handleRevealClue}
          />
          <AnimalChoices
            animals={state.currentLevel.animals}
            onEliminateAnimal={handleEliminateAnimal}
            onGuessAnimal={handleGuessAnimal}
            gameStatus={state.gameStatus}
          />
        </>
      )}

      {(state.gameStatus === 'success' || state.gameStatus === 'failure') && (
        <ResultModal
          isSuccess={state.gameStatus === 'success'}
          correctAnimal={
            state.currentLevel?.animals.find(
              (animal) => animal.id === state.currentLevel?.correctAnimalId
            ) || null
          }
          onPlayAgain={handlePlayAgain}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F0',
  },
  content: {
    padding: 16,
  },
  scoreContainer: {
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  scoreText: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#4CAF50',
  },
  levelTitle: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 24,
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 16,
  },
});