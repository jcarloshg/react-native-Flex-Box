import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container_padre}>
      <View style={styles.conteiner1}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
      </View>
      <View style={styles.conteiner2}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
      </View>
      <View style={styles.conteiner3}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
      </View>
      <View style={styles.conteiner4}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_padre: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row',
  },
  conteiner1: {
    flex: 1,
    justifyContent: 'center',
  },
  conteiner2: {
    flex: 1,
    justifyContent: 'space-around',
  },
  conteiner3: {
    flex: 1,
    justifyContent: 'space-between',
  },
  conteiner4: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#F0A23B',
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: '#5856D6',
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'green',
  },
});
