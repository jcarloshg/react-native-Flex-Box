import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window'); // don't change dimentions

export const DimensionesScreen = () => {
  const {wid, hei} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxOrange} />
        <View style={styles.boxPurple} />
      </View>
      <Text style={styles.title}>
        DimensionesScreen W:{width}, H:{height}
      </Text>
      <Text style={styles.title}>
        DimensionesScreen W:{wid}, H:{hei}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 20, textAlign: 'center'},
  container: {width: '100%', height: 600, backgroundColor: 'red'},
  boxPurple: {backgroundColor: '#5856D6', width: '50%', height: '50%'},
  boxOrange: {backgroundColor: '#F0A23B'},
});
