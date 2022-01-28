import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppState, AppStateStatus } from 'react-native';

export default function App() {
  const handleBlur = (state: AppStateStatus) => {
    console.log(state);
  }

  const handleFocus = (state: AppStateStatus) => {
    console.log(state);
  }

  useEffect(() => {
    AppState.addEventListener('blur', handleBlur);
    AppState.addEventListener('focus', handleFocus);
  },[]);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
