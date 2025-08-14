import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Ingredients from './Ingredients.tsx'
import Complete from './Complete.tsx'
import Layout from './Layout.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="ingredients" element={<Ingredients />} />
                <Route path="complete" element={<Complete />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);
