import { createContext } from "react";
import type { Product } from "../data/products";


export type CartContextValue = {
    items: Product[]
    total: number;
    addToCart : (product: Product) => void;
    removeFromCart: (index: number) => void;
    clearCart: () => void; 
};

export const CartContext = createContext<CartContextValue | null>(null);