import { NavLink } from "react-router";

export default function Ingredients() {

    return (
        <div>
            <h1>🍽️ Build a Burger</h1>
            <p>Choose what ingredients you want. We will custom build your burger.</p>
            <h4>Proteins</h4>
            <h4>Vegetables</h4>
            <h4>Cheeses</h4>
            <h4>Toppings & Spreads</h4>
            <h4>Condiments</h4>
            <p>When you are done selecting ingredient choices, proceed to complete your order below.</p>
            <NavLink to="/complete">Complete My Order</NavLink>
            <NavLink to="/complete">Just an Empty Bun Please</NavLink>
        </div>
    );
}