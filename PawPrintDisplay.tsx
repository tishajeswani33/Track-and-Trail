import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Search } from 'lucide-react-native';

type PawPrintDisplayProps = {
  pawPrintImage: string;
};

export default function PawPrintDisplay({ pawPrintImage }: PawPrintDisplayProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Search size={24} color="#FF6B6B" style={styles.icon} />
        <Text style={styles.title}>Mystery Paw Print</Text>
      </View>
      <View style={styles.pawPrintContainer}>
        <Image
          source={{ uri: pawPrintImage }}
          style={styles.pawPrintImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>
        Which animal left this paw print?
      </Text>
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
    color: '#FF6B6B',
  },
  pawPrintContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  pawPrintImage: {
    width: '100%',
    height: '100%',
  },
  question: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
  },
});