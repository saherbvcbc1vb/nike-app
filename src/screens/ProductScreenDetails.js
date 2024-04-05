import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductScreenDetails = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };
  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width, aspectRatio: 1, marginTop: 13 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          maximumZoomScale={10}
          bouncesZoom
          zoomScale={1}
        />
        <View>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* Price */}
          <Text style={styles.price}> ${product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductScreenDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
    paddingLeft: 5,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    paddingLeft: 5,
    letterSpacing: 1.1,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "400",
    paddingLeft: 10,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
});
