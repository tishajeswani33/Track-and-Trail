import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { Animal } from '@/types/game';
import { ThumbsUp, ThumbsDown, ChevronRight } from 'lucide-react-native';

type ResultModalProps = {
  isSuccess: boolean;
  correctAnimal: Animal | null;
  onPlayAgain: () => void;
};

export default function ResultModal({
  isSuccess,
  correctAnimal,
  onPlayAgain,
}: ResultModalProps) {
  if (!correctAnimal) return null;

  return (
    <Modal transparent animationType="fade" visible={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View
            style={[
              styles.resultHeader,
              isSuccess ? styles.successHeader : styles.failureHeader,
            ]}>
            {isSuccess ? (
              <ThumbsUp size={32} color="#FFFFFF" />
            ) : (
              <ThumbsDown size={32} color="#FFFFFF" />
            )}
            <Text style={styles.resultHeaderText}>
              {isSuccess ? 'Correct!' : 'Try Again!'}
            </Text>
          </View>

          <View style={styles.animalContainer}>
            <Image
              source={{ uri: correctAnimal.animalImage }}
              style={styles.animalImage}
              resizeMode="cover"
            />
            <Text style={styles.animalName}>{correctAnimal.name}</Text>
          </View>

          <View style={styles.factContainer}>
            <Text style={styles.factTitle}>Animal Fact:</Text>
            <Text style={styles.factText}>{correctAnimal.fact}</Text>
          </View>

          <TouchableOpacity style={styles.nextButton} onPress={onPlayAgain}>
            <Text style={styles.nextButtonText}>
              {isSuccess ? 'Next Level' : 'Try Again'}
            </Text>
            <ChevronRight size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    width: '100%',
    maxWidth: 400,
    overflow: 'hidden',
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  successHeader: {
    backgroundColor: '#4CAF50',
  },
  failureHeader: {
    backgroundColor: '#FF6B6B',
  },
  resultHeaderText: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginLeft: 12,
  },
  animalContainer: {
    alignItems: 'center',
    padding: 16,
  },
  animalImage: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  animalName: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 28,
    color: '#333333',
  },
  factContainer: {
    padding: 16,
    backgroundColor: '#F9F7F0',
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  factTitle: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#FF6B6B',
    marginBottom: 8,
  },
  factText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  nextButtonText: {
    fontFamily: 'Fredoka-Medium',
    fontSize: 18,
    color: '#FFFFFF',
    marginRight: 8,
  },
});