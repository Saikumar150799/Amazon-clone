import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../scrrens/Home/HomeScreen';
import CartScreen from '../scrrens/Cart/CartScreen';
import ProfileScreen from '../scrrens/Profile/ProfileScreen';
import ProductItemScreen from '../scrrens/Product/ProductItemScreen';
import AddressFormScreen from '../scrrens/Address/AddressFormScreen';
import AddressScreen from '../scrrens/Address/AddressScreen';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ProductItem" component={ProductItemScreen} />
      <HomeStack.Screen name="Address" component={AddressScreen} />
      <HomeStack.Screen name="AddressForm" component={AddressFormScreen} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Settings" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

function CarStackScreen() {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Settings" component={CartScreen} />
    </CartStack.Navigator>
  );
}


export { HomeStackScreen , ProfileStackScreen , CarStackScreen }