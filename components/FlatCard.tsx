import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Flat Cards</Text>
      <View style={styles.flatContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
  },
  flatContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
