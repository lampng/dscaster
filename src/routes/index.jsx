import home from '../pages/home/index.jsx';
import introduction from '../pages/introduction/index.jsx';
import data from '../pages/data/index.jsx';
const publicRoutes = [
    { path: '/', component: home },
    { path: '/introduction', component: introduction },
    { path: '/introduction/:introductionId', component: introduction },

    { path: '/data', component: data },
    { path: '/data/:dataId', component: data },


];
const PrivateRoutes = [];
export { publicRoutes, PrivateRoutes };
