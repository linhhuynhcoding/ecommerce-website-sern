import Home from '../pages/Home';
import AdminDashbroad from '../pages/Admin/Dashboard';

// Public routes
const publicRoutes = [
    {path : '/', component : Home},
    // {},
    // {},
]

const privateRoutes = [
]

const adminRoutes = [
    {path : 'dashboard', component : AdminDashbroad},
]

export { publicRoutes, adminRoutes, privateRoutes };