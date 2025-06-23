import MainLayout from "../components/layouts/MainLayouts/MainLayout";
import Home from '../pages/Home';
import Delivery from '../pages/Delivery';
import Catalog from '../pages/Catalog';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import ProductDetail from "../pages/ProductDetail";
import {
    BrowserRouter as Router,
    Routes,
    Route, 
} from 'react-router-dom';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/delivery', element: <Delivery /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/about', element: <About /> },
    { path: '/contacts', element: <Contacts /> },
    { path: '/product/:id', element: <ProductDetail /> }, 
];

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <MainLayout>
                                {element}
                            </MainLayout>
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}
