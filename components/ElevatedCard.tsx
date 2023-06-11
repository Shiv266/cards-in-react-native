import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingTitle}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.elevatedContainer}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Pizza</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Burger</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Pasta</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Drinks</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Cake</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
  },
  elevatedContainer: {
    padding: 5,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
