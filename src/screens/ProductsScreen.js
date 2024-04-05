import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { productsSlice } from "../store/ProuductsSlice";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  return (
    <>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));

              navigation.navigate("Products Details");
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
export default ProductsScreen;
