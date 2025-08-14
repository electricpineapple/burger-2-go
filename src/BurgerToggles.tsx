import { useMemo, useState } from "react";
import { INGREDIENTS, type Category, type Ingredient } from "./IngredientsModel";

type Props = {
    initialSelectedIds?: string[];
    onChange?: (selectedIds: string[]) => void;
    order?: Category[];
};

export default function BurgerToggles({
    initialSelectedIds = [],
    onChange,
    order = ["Proteins", "Vegetables", "Cheeses", "Toppings & Spreads", "Condiments"],
}: Props) {
    const [selected, setSelected] = useState<Set<string>>(
        () => new Set(initialSelectedIds)
    );

    const byCategory = useMemo(() => {
        const map: Record<Category, Ingredient[]> = {
            'Proteins': [],
            'Vegetables': [],
            'Cheeses': [],
            'Toppings & Spreads': [],
            'Condiments': [],
        };
        for (const ing of INGREDIENTS) map[ing.category].push(ing);
        return map;
    }, []);

    const toggle = (id: string) => {
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);

            if (onChange) {
                const ids = Array.from(next);
                onChange(ids);
            }
            return next;
        });
    };

    return (
        <div className="burger-sections">
            {order.map((cat) => {
                const items = byCategory[cat];
                if (!items?.length) return null;

                return (
                    <section key={cat} className="burger-section">
                        <h4 className="burger-section__title">{cat}</h4>
                        <div className="burger-list">
                            {items.map((ing) => {
                                const active = selected.has(ing.id);
                                return (
                                    <button
                                        key={ing.id}
                                        type="button"
                                        className={`burger-toggle ${active ? "is-active" : ""}`}
                                        aria-pressed={active}
                                        onClick={() => toggle(ing.id)}
                                    >
                                        {ing.icon && <img src={ing.icon} className="burger-icon" aria-hidden="true" />}
                                        {ing.name}
                                    </button>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
