import Home from '../pages/Home';
import Listing from '../pages/Listing';
import Dashboard from '../pages/Admin/Dashboard';
import Products from '../pages/Admin/Products';

// Public routes
const publicRoutes = [
    {path : '/', component : Home},
    {path : '/home', component : Home},
    {path : '/list', component : Listing},
    // {},
    // {},
]

const privateRoutes = [
]

const adminRoutes = [
    {path : 'dashboard', component : Dashboard},
    {path : 'products', component : Products},
]

export { publicRoutes, adminRoutes, privateRoutes };