import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LiquidGlassButton from '../components/LiquidGlassButton';

interface WelcomeScreenProps {
  navigation: any;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Cardomancer</Text>
        <Text style={styles.subtitle}>Magic card game 🃏</Text>
        
        <LiquidGlassButton
          title="Sign In"
          onPress={() => navigation.navigate('SignIn')}
          variant="primary"
          style={styles.signInButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#10b981',
    textAlign: 'center',
    marginBottom: 60,
  },
  signInButton: {
    minWidth: 200,
  },
});
