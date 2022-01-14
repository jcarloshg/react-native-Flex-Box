import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  caja1: {
    flex: 10,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#F0A23B',
  },
  caja2: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#5856D6',
  },
  caja3: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'green',
  },
});
