import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Torch from 'react-native-torch';

const App = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    Torch.switchState(active);
  }, [active]);

  return (
    <SafeAreaView
      style={active ? style.containerEnabled : style.containerDisabled}>
      <StatusBar
        backgroundColor={active ? '#fff' : 'black'}
        barStyle={!active ? 'light-content' : 'dark-content'}
      />
      <Text style={active ? style.textEnabled : style.textDisabled}>
        Lanterna {active ? 'ligada' : 'desligada'}
      </Text>
      <TouchableOpacity style={style.button} onPress={() => setActive(!active)}>
        <Text
          style={active ? style.textButtonEnabled : style.textButtonDisabled}>
          {active ? 'Desligar' : 'Ligar'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerEnabled: {
    diplay: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textEnabled: {
    color: 'black',
    fontSize: 20,
  },
  containerDisabled: {
    diplay: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textDisabled: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    width: 100,
    margin: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  textButtonEnabled: {
    color: 'black',
    fontSize: 16,
  },
  textButtonDisabled: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
