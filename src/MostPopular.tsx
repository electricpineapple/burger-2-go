import { useEffect, useState } from 'react';
import { collection, doc, getDocs, increment, writeBatch } from 'firebase/firestore/lite';
import { db } from './firebase';
import type { Ingredient } from './IngredientsModel';

interface Popularity {
    count: number;
}

interface PopularityWithId extends Popularity {
    id: string;
}

interface Props {
    ingredients: Ingredient[];
}

export function MostPopularIngredient({ ingredients }: Props) {
    const [mostPopular, setMostPopular] = useState<PopularityWithId | null>(null);
    const batch = writeBatch(db);

    useEffect(() => {
        (async () => {
            ingredients.forEach(ing => {
                const updatesRef = doc(db, 'popularity', ing.id)
                batch.update(updatesRef, { count: increment(1) })
            })
            batch.commit();

            const snapshot = await getDocs(collection(db, 'popularity'));
            const popularities: PopularityWithId[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Popularity),
            }));

            if (popularities.length > 0) {
                const topIngredient = popularities.reduce((max, current) =>
                    current.count > max.count ? current : max
                );
                setMostPopular(topIngredient);
            }
        })();
    }, [db]);

    if (!mostPopular) return null;

    return (
        <div className="most-popular">
            <h2>Fun Fact:</h2>
            <p>The most popular ingredient is {mostPopular.id}.</p>
        </div>
    );
}