import { useMemo, useState } from "react";
import { INGREDIENTS, type Category, type Ingredient } from "./IngredientsModel";

type Props = {
    initialSelectedIds?: Ingredient[];
    onChange?: (selectedIds: Ingredient[]) => void;
    order?: Category[];
};

export default function BurgerToggles({
    initialSelectedIds = [],
    onChange,
    order = ["Proteins", "Vegetables", "Cheeses", "Toppings & Spreads", "Condiments"],
}: Props) {
    const [selected, setSelected] = useState<Set<Ingredient>>(
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

    const toggle = (ing: Ingredient) => {
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(ing) ? next.delete(ing) : next.add(ing);

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
                                const active = selected.has(ing);
                                return (
                                    <button
                                        key={ing.id}
                                        type="button"
                                        className={`burger-toggle ${active ? "is-active" : ""}`}
                                        aria-pressed={active}
                                        onClick={() => toggle(ing)}
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
