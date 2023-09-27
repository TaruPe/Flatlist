import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import DATA from './DATA';
import Row from './components/Row';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Row item={item} /> // Call the Row component for each element in the list
        )}
        keyExtractor={item => item.id}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
