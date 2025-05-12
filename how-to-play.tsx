import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HowToPlayScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How To Play</Text>
      </View>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.instructionCard}>
          <Text style={styles.stepTitle}>Step 1: Examine the Paw Print</Text>
          <Text style={styles.stepDescription}>
            Look carefully at the mystery paw print shown on the screen. Each animal has a unique paw print!
          </Text>
        </View>

        <View style={styles.instructionCard}>
          <Text style={styles.stepTitle}>Step 2: Read the Clues</Text>
          <Text style={styles.stepDescription}>
            Tap the "Get Hint" button to reveal clues about the animal. The clues will help you figure out which animal left the paw print.
          </Text>
        </View>

        <View style={styles.instructionCard}>
          <Text style={styles.stepTitle}>Step 3: Eliminate Animals</Text>
          <Text style={styles.stepDescription}>
            Based on the clues, tap to eliminate animals that don't match. For example, if a clue says "This animal has stripes" then you can eliminate animals without stripes.
          </Text>
        </View>

        <View style={styles.instructionCard}>
          <Text style={styles.stepTitle}>Step 4: Make Your Final Choice</Text>
          <Text style={styles.stepDescription}>
            When you think you know which animal left the paw print, tap on that animal to make your final guess!
          </Text>
        </View>

        <View style={styles.instructionCard}>
          <Text style={styles.stepTitle}>Step 5: Learn Animal Facts</Text>
          <Text style={styles.stepDescription}>
            Whether you're right or wrong, you'll learn interesting facts about the animal that left the paw print.
          </Text>
        </View>

        <Text style={styles.tipText}>
          TIP: The fewer hints you use, the more points you'll earn! Can you solve the mystery with just one or two clues?
        </Text>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  instructionCard: {
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
  stepTitle: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 8,
  },
  stepDescription: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
  },
  tipText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#FFF9C4',
    borderRadius: 16,
  },
});