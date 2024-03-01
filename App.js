import { StyleSheet, View } from 'react-native';
import LOGIN from './screen/LOGIN'
import SIGNUP from './screen/SIGNUP'
import Main from './screen/Main'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Main /> */}
      <LOGIN />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
