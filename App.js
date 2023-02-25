import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />

      <StatusBar style="auto" />
    </Provider>
  );
}
