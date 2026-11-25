import {useCart} from "../hooks/useCart";
export function Header() {
    const items = useCart().items;

    return (
        <header className="header">
            <h1>Litla Smábúðin</h1>
            <span className="badge"> Karfa ({items.length})</span>
        </header>
    );
}

