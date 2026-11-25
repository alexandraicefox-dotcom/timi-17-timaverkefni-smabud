import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";


export function Cart() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen((open) => !open);
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price, 0);

return (
  <aside className="cart">
    <div className="cart-header">
      <h2>Karfa</h2>
      <button type="button" onClick={toggleOpen} aria-expanded={isOpen}>
        {isOpen ? "Fela" : "Sýna"}
      </button>
    </div>

    {isOpen && (
      <>
        {items.length === 0 ? (
          <p>Karfan er tóm.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{item.name} — {formatPrice(item.price)}</span>
                <button type="button" onClick={() => removeFromCart(index)}>
                  Fjarlægja
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="total">Samtals {formatPrice(total)}</p>
        <button type="button" onClick={clearCart} disabled={items.length === 0}>
          Tæma körfu
        </button>
      </>
    )}
  </aside>
);
}
