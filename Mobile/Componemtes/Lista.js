import React from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';


export function Lista(props) {
  return (
    <FlatList
      data={props.dados}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}


const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
