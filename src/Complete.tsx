import { NavLink } from "react-router";
import { db } from './firebase';
import { MostPopularIngredient } from "./MostPopular";

export default function Complete() {
    return (
        <div>
            <h1>Your Order is Being Made</h1>
            <p>Our culinary artist are hard at work crafting your custom sandwich.</p>
            <h2>Estimated Delivery Time:</h2>
            <p>7 minutes</p>
            <MostPopularIngredient db={db} />
            <NavLink to="/">Start a New Order</NavLink>
        </div>
    );
}