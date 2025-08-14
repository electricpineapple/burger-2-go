import { createContext } from "react";
import type { Order } from "./Layout";

const defaultValue: OrderContextType = {
    order: { ingredients: [], id: undefined },
    setOrder: () => { },
}
export interface OrderContextType {
    order: Order;
    setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

export const OrderContext = createContext<OrderContextType>(defaultValue)
