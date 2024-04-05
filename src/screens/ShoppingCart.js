import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { selectSubtotal } from "../store/cartSlice";
import { selectDeliveryPrice } from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const SubTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = SubTotal + deliveryFee;

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>SubTotal</Text>
        <Text style={styles.text}>${SubTotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Deliver</Text>
        <Text style={styles.text}>${deliveryFee}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${total}</Text>
      </View>
    </View>
  );
};
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  totalsContainer: {
    padding: 20,
    paddingTop: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontWeight: "500",
    fontSize: 16,
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

export default ShoppingCart;
