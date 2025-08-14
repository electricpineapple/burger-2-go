

interface Props {
    itemCount: number;
}

export function DeliveryTime({ itemCount }: Props) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + (itemCount * 3));
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div>
            <h2>Estimated Delivery Time:</h2>
            <p>{time}</p>
        </div>
    );
}