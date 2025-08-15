import { useNavigate } from "react-router";
import { MostPopularIngredient } from "./MostPopular";
import { useContext } from "react";
import { OrderContext } from "./OrderContext";
import { DeliveryTime } from "./DeliveryTime";
import { BurgerStack } from "./BurgerStack";

export default function Complete() {
    const orderValue = useContext(OrderContext)

    const navigate = useNavigate()
    const clearAndStart = () => {
        orderValue.setOrder({
            ingredients: [],
            id: undefined,
        })
        navigate('/');
    };

    return (
        <div className="complete-screen">
            <h1>Your Order is Being Made</h1>
            <p>Our culinary artists are hard at work crafting your custom sandwich.</p>
            <DeliveryTime itemCount={orderValue.order.ingredients.length} />
            <BurgerStack ingredients={orderValue.order.ingredients} />
            <MostPopularIngredient ingredients={orderValue.order.ingredients} />
            <div className="button-box">
                <button onClick={clearAndStart} className="cta-button">Start a New Order</button>
            </div>
        </div>
    );
}