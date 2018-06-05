import * as React from 'react';

const routes = [
  {
    exact: true,
    path: '/',
    title: () => <h1 className="fw-700 align-right title">Home</h1>
  },
  {
    path: '/inventory',
    title: () => <h1 className="fw-700 align-right title">Inventory</h1>
},
  {
    path: '/patterns',
    title: () => <h1 className="fw-700 align-right title">Patterns</h1>
},
  {
    path: '/wips',
    title: () => <h1 className="fw-700 align-right title">WIPs</h1>
},
];

export default routes