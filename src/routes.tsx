import * as React from 'react';

import Home from "./components/Home";
import Inventory from "./components/Inventory";

const routes = [
  {
    component: <div>Home</div>,
    exact: true,
    object: Home,
    path: '/',
    title: () => <h1 className="fw-700 align-right title">Home</h1>,
  },
  {
    component: <div>Inventory</div>,
    object: Inventory,
    path: '/inventory',
    title: () => <h1 className="fw-700 align-right title">Inventory</h1>,

},
//   {
//     path: '/patterns',
//     title: () => <h1 className="fw-700 align-right title">Patterns</h1>,
//     component: {Patterns}
// },
//   {
//     path: '/wips',
//     title: () => <h1 className="fw-700 align-right title">WIPs</h1>,
//     component: {Wips}
// },
];

export default routes