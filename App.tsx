import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./src/components/navbar";

export default function App() {
  const appTitle = 'Blog App';
  return (
    <View style={styles.container}>
      <Navbar title={appTitle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
});
