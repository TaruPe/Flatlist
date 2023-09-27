import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Row({ item }) {
  return (
    // The View component is used to define styles and group content
    <View style={styles.rowContainer}>
      <Text style={styles.name}>
        {item.firstname} {item.lastname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    marginTop: 15,
    marginBottom: 15
  },
  name: {
    fontSize: 15,
  },
});
