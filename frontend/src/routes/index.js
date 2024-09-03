import Home from '../pages/Home';
import AdminDashbroad from '../pages/Admin';

// Public routes
const publicRoutes = [
    {path : '/', component : Home},
    {path : '/admin', component : AdminDashbroad},
    // {},
    // {},
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes };