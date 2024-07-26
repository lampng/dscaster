import home from '../pages/home/index.jsx';
import introduction from '../pages/introduction/index.jsx';
import data from '../pages/data/index.jsx';
import product from '../pages/product/index.jsx';
import customer from '../pages/customer/index.jsx';
const publicRoutes = [
    { path: '/', component: home },
    
    { path: '/introduction', component: introduction },
    { path: '/introduction/:introductionId', component: introduction },

    { path: '/data', component: data },
    { path: '/data/:dataId', component: data },

    { path: '/product', component: product },
    { path: '/product/:productId', component: product },

    { path: '/customer', component: customer },
    { path: '/customer/:customerId', component: customer },
];
const PrivateRoutes = [];
export { publicRoutes, PrivateRoutes };
