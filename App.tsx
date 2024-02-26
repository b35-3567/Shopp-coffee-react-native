import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, } from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/main/AppContext';
import Home from './src/app/main/tabs/Home';

function App(): React.JSX.Element {
  return (
     
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
     
    
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



