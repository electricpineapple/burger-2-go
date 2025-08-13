import { useEffect, useState } from 'react';
import { Firestore, collection, getDocs } from 'firebase/firestore/lite';

interface Popularity {
    count: number;
}

interface PopularityWithId extends Popularity {
    id: string;
}

interface Props {
    db: Firestore;
}

export function MostPopularIngredient({ db }: Props) {
    const [mostPopular, setMostPopular] = useState<PopularityWithId | null>(null);

    useEffect(() => {
        (async () => {
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
        <div>
            <h2>Fun Fact:</h2>
            <p>The most popular ingredient is {mostPopular.id}.</p>
        </div>
    );
}