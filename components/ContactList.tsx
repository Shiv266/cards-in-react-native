import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contactList} from '../data/contact';

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingTitle}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactList.map(contact => (
          <View style={styles.userCard} key={contact.uid}>
            <Image
              source={{
                uri: contact.imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
    resizeMode: 'contain',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5e5858',
  },
  userStatus: {
    fontSize: 12,
  },
});
