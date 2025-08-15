import type { Ingredient } from "./IngredientsModel";
import topBunPng from "./assets/bun-top.png"
import bottomBunPng from "./assets/bun-bottom.png"

interface Props {
    ingredients: Ingredient[];
}

export function BurgerStack({ ingredients }: Props) {

    return (
        <div className="burger-stack">
            <img src={topBunPng} />
            {ingredients.slice().reverse().map((ing, i) => (
                <img key={ing.id} src={ing.icon} style={{ zIndex: ingredients.length - i }} />
            ))}
            <img src={bottomBunPng} />
        </div>
    );
}