import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Entities from './Entities';
import Physics from './physics';
import { TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  const [running, setRunning] = useState(false)
  const [game, setGame] = useState(null)
  const [score, setScore] = useState(0)
  
  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 20}}>{score}</Text>
      <GameEngine
        ref={(ref) => {setGame(ref)}}
        systems={[Physics]}
        entities={Entities()}
        running={running}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        onEvent={(e) => {switch(e.type){
          case 'game_over':
            setRunning(false)
            game.stop()
            break;
          case 'point':
            setScore(score + 1)
            break;
        }}}
      >
      <StatusBar style="auto" hidden={true}/>
      </GameEngine>

      {
        !running ? 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{padding: 20, backgroundColor: 'black'}} 
            onPress={() => {
              setScore(0) 
              setRunning(true)
              game.swap(Entities())}}
            >
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 28, color: 'white'}}>START GAME ERA KO</Text>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 28, color: 'white'}}>KAYA MO YAN!</Text>
          </TouchableOpacity>
        </View>
        :
        null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
