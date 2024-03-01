import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
export default function App() {
  return (
    <View style={styles.container}>
      <View style ={{alignItems: 'center'}}>
        <Image source={require('../image/logo.png') } style ={[{width: 100, height: 100}, styles.pd]} />
        <Text style = {[styles.title, styles.pd]}>Login Template</Text>
        <Text style ={[{textAlign: 'center'}, styles.pd]}>The easiest way to start with your amazing application</Text>
      </View>
    <View style ={styles.pd}>
      <Button title= 'LOGIN' buttonStyle ={[{backgroundColor: '#560cce'}, styles.button] }/>
    </View> 
    <View style = {styles.pd}>
      <Button title= 'SIGN UP' buttonStyle ={[{backgroundColor: '#fff'}, styles.button]} titleStyle= {{color:'#560cce', fontWeight: '900'}}/>
    </View>   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30
  }
  ,title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#560cce'
  }
  ,button: {
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#DDDDDD', 
  }
  ,pd: {
    padding: 10
  }

});
