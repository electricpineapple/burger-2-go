import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

interface Popularity {
    count: number;
}

interface PopularityWithId extends Popularity {
    id: string;
}

async function getPopularity(): Promise<PopularityWithId[]> {
    const popularityCol = collection(db, 'popularity');
    const snapshot = await getDocs(popularityCol);
    return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        id: doc.id,
        ...(doc.data() as Popularity),
    }));
}

export function usePopularity() {
    const [data, setData] = useState<PopularityWithId[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;

        setLoading(true);
        getPopularity()
            .then((cities) => {
                if (isMounted) setData(cities);
            })
            .catch((err) => {
                if (isMounted) setError(err);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [db]);

    return { data, loading, error };
}