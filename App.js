import { StyleSheet, ScrollView, Text } from 'react-native';
import Header from './components/Header';
import First from './components/First';
import Second from './components/Second';
import Footer from './components/Footer';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <First />
      <Second />
      <Footer />
      <Text style={{textAlign: 'center', fontSize: 15}}>Copyright © 2022 Soora. All rights reserved</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe8e8',
    height: '900%'
  },
});
