import React from 'react';
import {SafeAreaView} from 'react-native';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {FlexScreen} from './src/screens/FlexScreen';
import {PositionScreen} from './src/screens/PositionScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};
