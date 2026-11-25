import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const cart = useContext(CartContext);

  if (cart === null) {
    throw new Error("useCart verður að vera notað innan CartProvider");
  }

  return cart;
}