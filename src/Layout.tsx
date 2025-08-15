import { useState } from "react";
import { Outlet, useNavigate, useMatch } from "react-router";
import { OrderContext } from "./OrderContext";
import './Layout.css'
import type { Ingredient } from "./IngredientsModel";

export interface Order {
    ingredients: Ingredient[];
    id: string | undefined;
}

export default function Layout() {
    const navigate = useNavigate()
    const isIndex = !!useMatch({ path: '/', end: true });

    const [order, setOrder] = useState<Order>({
        ingredients: [],
        id: undefined,
    });

    return (
        <div className="layout-wrapper">
            {!isIndex && (
                <button className="back-button" onClick={() => navigate(-1)}>{"<"} Back</button>
            )}
            <OrderContext.Provider value={{ order, setOrder }}>
                <Outlet />
            </OrderContext.Provider>
        </div>
    );
}