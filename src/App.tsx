import { NavLink } from 'react-router';
import building from './assets/building.png'

function App() {

    return (
        <div className="start-screen">
            <img src={building} alt="Building" className="header-image" />
            <h1>Burgers-2-Go!</h1>
            <p>Providing you with the finest dining you can have between two buns, since 1981.</p>
            <div className="button-box">
                <NavLink to="/ingredients" className="cta-button">Place Order</NavLink>
            </div>
        </div>
    );
}

export default App
