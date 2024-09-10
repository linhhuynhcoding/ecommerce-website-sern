import Home from '../pages/Home';
import Listing from '../pages/Listing';

import Login from '../pages/Login';
import Register from '../pages/Register';

import Dashboard from '../pages/Admin/Dashboard';
import Products from '../pages/Admin/Products';
import VerifyMail from '../pages/Register/VerifyMail';

// Public routes
const publicRoutes = [
    {path : '/', component : Home},
    {path : '/home', component : Home},
    {path : '/list', component : Listing},
    {path : '/cate/:categoryID', component : Listing},
    // ----------
    {path : '/login', component : Login},
    {path : '/register', component : Register},
    {path : '/register/verify', component : VerifyMail},
    // {},
]

const privateRoutes = [
]

const adminRoutes = [
    {path : 'dashboard', component : Dashboard},
    {path : 'products', component : Products},
]

export { publicRoutes, adminRoutes, privateRoutes };