import { NavLink } from "react-router";
import BurgerToggles from "./BurgerToggles";
import { useContext } from "react";
import { OrderContext } from "./OrderContext";

export default function Ingredients() {
    const orderValue = useContext(OrderContext)

    return (
        <div className="ingredients-screen">
            <h1>🍽️ Build a Burger</h1>
            <p>Choose what ingredients you want. We will custom build your burger.</p>
            <BurgerToggles
                initialSelectedIds={orderValue.order.ingredients}
                onChange={(ids) => orderValue.setOrder(prev => ({
                    ...prev,
                    ingredients: ids,
                }))}
            />
            <p>When you are done selecting ingredient choices, proceed to complete your order below.</p>
            <div className="button-box">
                <NavLink to="/complete" className="cta-button">Complete My Order</NavLink>
                <NavLink to="/complete" className="secondary-button">Just an Empty Bun Please</NavLink>
            </div>
        </div>
    );
}