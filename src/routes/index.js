// Layouts

// Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Nike from '~/pages/Nike';
import Mizuno from '~/pages/Mizuno';
import Adidas from '~/pages/Adidas';
import Puma from '~/pages/Puma';
import Kamito from '~/pages/Kamito';
import Cart from '~/pages/Cart';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Product },
    { path: '/nike', component: Nike },
    { path: '/mizuno', component: Mizuno },
    { path: '/adidas', component: Adidas },
    { path: '/puma', component: Puma },
    { path: '/kamito', component: Kamito },
    { path: '/cart', component: Cart },
    { path: '/upload', component: Upload },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
