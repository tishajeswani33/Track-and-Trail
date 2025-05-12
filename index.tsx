import { StyleSheet, View, Text } from 'react-native';
import { useEffect } from 'react';
import GameScreen from '@/components/game/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameProvider } from '@/context/GameContext';

export default function PlayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GameProvider>
        <View style={styles.header}>
          <Text style={styles.title}>Who Left That Paw Print?</Text>
        </View>
        <GameScreen />
      </GameProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F0',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
});