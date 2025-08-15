import BurgerToggles from "./BurgerToggles";
import { useContext } from "react";
import { OrderContext } from "./OrderContext";
import { useNavigate } from "react-router";
import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite";
import { db } from './firebase';

export default function Ingredients() {
    const orderValue = useContext(OrderContext)
    const navigate = useNavigate();
    const submitOrder = async () => {
        try {
            if (orderValue.order.id) {
                await setDoc(doc(db, "orders", orderValue.order.id), {
                    ingredients: orderValue.order.ingredients.map(ing => ing.id)
                });
            }
            else {
                const docRef = await addDoc(collection(db, "orders"), {
                    ingredients: orderValue.order.ingredients.map(ing => ing.id)
                })
                orderValue.setOrder(prev => ({
                    ...prev,
                    id: docRef.id,
                }))
            }

            navigate('/complete');
        }
        catch (e) {
            console.error("Error submitting order:", e);
        }
    };

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
                <button onClick={submitOrder} className="cta-button" disabled={orderValue.order.ingredients.length <= 0}>Complete My Order</button>
                <button onClick={submitOrder} className="secondary-button" disabled={orderValue.order.ingredients.length > 0}>Just an Empty Bun Please</button>
            </div>
        </div>
    );
}