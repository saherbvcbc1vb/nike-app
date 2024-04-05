import { View, Pressable, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductScreenDetails from "./screens/ProductScreenDetails";
import ProductsScreen from "./screens/ProductsScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={21} color="gray" />
                {numberOfItems > 0 && (
                  <View
                    style={{
                      backgroundColor: "gray",
                      borderRadius: 16,
                      marginLeft: 5,
                      paddingHorizontal: 4,
                      paddingVertical: 2,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 11 }}>
                      {numberOfItems}
                    </Text>
                  </View>
                )}
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Products Details"
          component={ProductScreenDetails}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
