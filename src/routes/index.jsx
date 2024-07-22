import home from '../pages/home/index.jsx';
import introduction from '../pages/introduction/index.jsx';
const publicRoutes = [
    { path: '/', component: home },
    { path: '/introduction', component: introduction },
    { path: '/introduction/:introductionId', component: introduction },
];
const PrivateRoutes = [];
export { publicRoutes, PrivateRoutes };
