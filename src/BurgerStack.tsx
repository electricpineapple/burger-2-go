import type { Ingredient } from "./IngredientsModel";
import topBunPng from "./assets/bun-top.png"
import topBunPng2 from "./assets/bun-top2.png"
import bottomBunPng from "./assets/bun-bottom.png"

interface Props {
    ingredients: Ingredient[];
}

export function BurgerStack({ ingredients }: Props) {

    const topBunSelect = ingredients.length === 0 ? topBunPng2 : topBunPng

    return (
        <div className="burger-stack">
            <img src={topBunSelect} style={ingredients.length === 0 ? { zIndex: 100 } : {}} />
            {ingredients.slice().reverse().map((ing, i) => (
                <img key={ing.id} src={ing.icon} style={{ zIndex: ingredients.length - i }} />
            ))}
            <img src={bottomBunPng} />
        </div>
    );
}