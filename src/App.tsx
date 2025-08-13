import './App.css'
import { usePopularity } from './firebase';

function App() {
    const { data: popularity, loading, error } = usePopularity();
    const mostPopular = popularity.reduce((max, current) =>
        current.count > max.count ? current : max
        , popularity[0]);
    if (loading) return <p>Loading cities...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <ul>
                {popularity.map((popularity) => (
                    <li key={popularity.id}>
                        {popularity.id} – count: {popularity.count}
                    </li>
                ))}
            </ul>
            <p>The most popular ingredient is {mostPopular.id}</p>
        </div>
    )
}

export default App
