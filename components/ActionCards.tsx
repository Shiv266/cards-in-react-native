import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingTitle}>Blog Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>What's new in React 2023</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.textDescription} numberOfLines={5}>
            Before react 18 was introduced, if one component of an app was slow,
            it slowed down the entire app, but with react 18, if one component
            is slow, it will not slow down the entire App. Suspense allows you
            to instruct React to send HTML for other components, such as a
            loading spinner, before sending HTML for the placeholder. The server
            renderer will then insert its HTML into the same stream once the
            slow component is prepared and has fetched its data.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://react.dev/reference/react/Suspense')
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://react.dev')}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
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
    height: 390,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  cardElevated: {
    backgroundColor: '#f2cc8f',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
  },
  cardBody: {
    padding: 10,
  },
  cardFooter: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textDescription: {
    fontSize: 14,
    marginBottom: 4,
    color: '#414a4e',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 4,
  },
});
