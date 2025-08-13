import { useNavigate } from 'react-router';
import './App.css'
import building from './assets/building.png'

function App() {
    const navigate = useNavigate();

    const goToIngredients = () => {
        navigate('/ingredients');
    };

    return (
        <>
            <div>
                <img src={building} alt="Building" />
                <h1>Burgers-2-Go!</h1>
                <p>Providing you with the finest dining you can have between two buns, since 1981.</p>
                <button onClick={goToIngredients}>Place Order</button>
            </div>
        </>
    );
}

export default App
