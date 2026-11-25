import { createElement, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product } from "../data/products";

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Product[]>([]);

    // Reikna samtölu allra vara í körfunni.
    const total = items.reduce((sum, item) => sum + item.price, 0);

    // Bæta vöru í körfu.
    function addToCart(product: Product) {
        setItems((previousItems) => [...previousItems, product]);
    }

    // Fjarlægja vöru úr körfu.
    function removeFromCart(index: number) {
        setItems((previousItems) => previousItems.filter((_, itemIndex) => itemIndex !== index));
    }

    // Hreinsa körfu.
    function clearCart() {
        setItems([]);
    }

    return createElement(
        CartContext.Provider,
        { value: { items, total, addToCart, removeFromCart, clearCart } },
        children,
    );
}