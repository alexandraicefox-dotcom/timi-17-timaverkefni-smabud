import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

export function ProductList() {
  const { addToCart } = useCart();

  return ( 
    <div className = "products">
        {products.map((product) => (
        <article className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>{formatPrice(product.price)}</p>
            <button type="button" onClick ={() => addToCart(product)}>
                Setja í körfu
            </button>
            </article>
        ))}
    </div>
  );
}
