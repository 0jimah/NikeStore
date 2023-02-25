import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectNumberofItems } from './store/cartSlice';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const NumberOfItems = useSelector(selectNumberofItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColr: 'white' } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome5 name="shopping-cart" size={18} />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>
                  {NumberOfItems}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Products Details"
          component={ProductDetailsScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
