import { StyleSheet, View, Text, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Volume2, VolumeX, HelpCircle, RefreshCw } from 'lucide-react-native';

export default function SettingsScreen() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState('normal');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingIcon}>
              {soundEnabled ? (
                <Volume2 size={24} color="#4CAF50" />
              ) : (
                <VolumeX size={24} color="#FF6B6B" />
              )}
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>Sound Effects</Text>
              <Text style={styles.settingDescription}>
                Enable or disable game sounds
              </Text>
            </View>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: '#E0E0E0', true: '#A5D6A7' }}
              thumbColor={soundEnabled ? '#4CAF50' : '#BDBDBD'}
              ios_backgroundColor="#E0E0E0"
            />
          </View>
        </View>

        <View style={styles.settingCard}>
          <View style={styles.settingIcon}>
            <HelpCircle size={24} color="#4CAF50" />
          </View>
          <Text style={styles.settingTitle}>Difficulty Level</Text>
          <View style={styles.difficultyOptions}>
            <TouchableOpacity
              style={[
                styles.difficultyButton,
                difficulty === 'easy' && styles.difficultyButtonActive,
              ]}
              onPress={() => setDifficulty('easy')}>
              <Text
                style={[
                  styles.difficultyButtonText,
                  difficulty === 'easy' && styles.difficultyButtonTextActive,
                ]}>
                Easy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.difficultyButton,
                difficulty === 'normal' && styles.difficultyButtonActive,
              ]}
              onPress={() => setDifficulty('normal')}>
              <Text
                style={[
                  styles.difficultyButtonText,
                  difficulty === 'normal' && styles.difficultyButtonTextActive,
                ]}>
                Normal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.difficultyButton,
                difficulty === 'hard' && styles.difficultyButtonActive,
              ]}
              onPress={() => setDifficulty('hard')}>
              <Text
                style={[
                  styles.difficultyButtonText,
                  difficulty === 'hard' && styles.difficultyButtonTextActive,
                ]}>
                Hard
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.resetButton}>
          <RefreshCw size={20} color="#FFFFFF" style={styles.resetIcon} />
          <Text style={styles.resetButtonText}>Reset Game Progress</Text>
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </View>
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
  content: {
    padding: 16,
  },
  settingCard: {
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
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  settingDescription: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#666666',
  },
  difficultyOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  difficultyButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 4,
  },
  difficultyButtonActive: {
    backgroundColor: '#4CAF50',
  },
  difficultyButtonText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#757575',
  },
  difficultyButtonTextActive: {
    color: '#FFFFFF',
  },
  resetButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resetIcon: {
    marginRight: 8,
  },
  resetButtonText: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
  versionContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  versionText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#9E9E9E',
  },
});