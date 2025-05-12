import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Crown, Medal, Star, Zap } from 'lucide-react-native';
import { useState } from 'react';

type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
};

export default function AchievementsScreen() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'First Discovery',
      description: 'Correctly identify your first animal',
      icon: <Star size={32} color="#FFD700" />,
      unlocked: true,
    },
    {
      id: '2',
      title: 'Quick Thinker',
      description: 'Identify an animal with only one clue',
      icon: <Zap size={32} color="#FF9800" />,
      unlocked: false,
    },
    {
      id: '3',
      title: 'Animal Expert',
      description: 'Correctly identify 10 different animals',
      icon: <Medal size={32} color="#7986CB" />,
      unlocked: false,
    },
    {
      id: '4',
      title: 'Perfect Score',
      description: 'Complete a level without any wrong guesses',
      icon: <Crown size={32} color="#8E24AA" />,
      unlocked: false,
    },
    {
      id: '5',
      title: 'Safari Master',
      description: 'Complete all safari animals',
      icon: <Star size={32} color="#4CAF50" />,
      unlocked: false,
    },
    {
      id: '6',
      title: 'Forest Explorer',
      description: 'Complete all forest animals',
      icon: <Star size={32} color="#795548" />,
      unlocked: false,
    },
    {
      id: '7',
      title: 'Ocean Diver',
      description: 'Complete all ocean animals',
      icon: <Star size={32} color="#039BE5" />,
      unlocked: false,
    },
  ]);

  const renderAchievement = ({ item }: { item: Achievement }) => (
    <View style={[styles.achievementCard, !item.unlocked && styles.achievementLocked]}>
      <View style={styles.achievementIcon}>
        {item.icon}
      </View>
      <View style={styles.achievementInfo}>
        <Text style={styles.achievementTitle}>{item.title}</Text>
        <Text style={styles.achievementDescription}>{item.description}</Text>
      </View>
      {!item.unlocked && (
        <View style={styles.lockedOverlay}>
          <Text style={styles.lockedText}>Locked</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Achievements</Text>
      </View>
      <FlatList
        data={achievements}
        renderItem={renderAchievement}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.achievementsList}
      />
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
  achievementsList: {
    padding: 16,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  achievementLocked: {
    opacity: 0.7,
  },
  achievementIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#333333',
    marginBottom: 4,
  },
  achievementDescription: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#666666',
  },
  lockedOverlay: {
    position: 'absolute',
    right: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  lockedText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: '#757575',
  },
});