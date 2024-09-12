import Home from '../pages/Home';
import Listing from '../pages/Listing';

import Login from '../pages/Login';
import Register from '../pages/Register';

import Dashboard from '../pages/Admin/Dashboard';
import Orders from '../pages/Admin/Orders';
import Products from '../pages/Admin/Products';
import VerifyMail from '../pages/Register/VerifyMail';

import Profile from '../pages/Profile'
import Cart from '../pages/Cart';

import Order from '../pages/Order'

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
    {path : '/cart', component : Cart},
]

const privateRoutes = [
    {path : '/profile', component : Profile},
    {path : '/placeorder', component : Order},

]

const adminRoutes = [
    {path : 'dashboard', component : Dashboard},
    {path : 'products', component : Products},
    {path : 'orders', component : Orders},
]

export { publicRoutes, adminRoutes, privateRoutes };