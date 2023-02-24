import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../data/products';

const ProductScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemsContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
      numColumns={2}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemsContainer: { width: '50%', padding: 1 },
});
