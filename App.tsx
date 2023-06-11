import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCards />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
