import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingTitle}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Keral Backwaters</Text>
          <Text style={styles.cardLabel}>Alappuzha</Text>
          <Text style={styles.cardDescription}>
            Vembanad Lake is the longest backwater in Kerala, as well as the
            longest lake in India. The Kochi city, Kuttanad, Kumarakom, and
            Pathiramanal Island are located in this long backwater.
          </Text>
          <Text style={styles.cardFooter}>20 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
  },
  card: {
    height: 380,
    marginVertical: 12,
    marginHorizontal: 15,
    borderRadius: 6,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  cardLabel: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    marginBottom: 12,
    color: '#616669',
  },
  cardFooter: {},
});
