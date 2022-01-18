import React from 'react';
import {SafeAreaView} from 'react-native';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {FlexAlingItems} from './src/screens/FlexAlingItems';
import {FlexAlingSelf} from './src/screens/FlexAlingSelf';
import {FlexAlingWrap} from './src/screens/FlexAlingWrap';
import {FlexScreen} from './src/screens/FlexScreen';
import {PositionScreen} from './src/screens/PositionScreen';
import {TareaScreen} from './src/screens/TareaScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#28425B'}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <FlexAlingItems /> */}
      {/* <FlexAlingSelf /> */}
      {/* <FlexAlingWrap /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};
