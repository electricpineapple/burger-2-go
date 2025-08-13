import { useNavigate } from "react-router";
import { db } from './firebase';
import { MostPopularIngredient } from "./MostPopular";

export default function Complete() {
    const navigate = useNavigate();

    const goToNewOrder = () => {
        navigate('/');
    };

    return (
        <div>
            <button onClick={() => navigate(-1)}>{"<"} Back</button>
            <h1>Your Order is Being Made</h1>
            <p>Our culinary artist are hard at work crafting your custom sandwich.</p>
            <h2>Estimated Delivery Time:</h2>
            <p>7 minutes</p>
            <MostPopularIngredient db={db} />
            <button onClick={goToNewOrder}>Start a New Order</button>
        </div>
    );
}