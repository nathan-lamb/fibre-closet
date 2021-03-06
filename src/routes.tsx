import * as React from 'react'

import Home from "./components/Home"
import Patterns from "./components/Patterns"
import Stash from "./components/Stash"
import Wips from "./components/Wips"

const routes = [
  {
    component: <div>Home</div>,
    exact: true,
    object: Home,
    path: '/',
    title: () => <h1 className="fw-700 align-right title">Home</h1>
  },
  {
    component: <div>Stash</div>,
    object: Stash,
    path: '/stash',
    title: () => <h1 className="fw-700 align-right title">Stash</h1>
  },
  {
    component: <div>Patterns</div>,
    object: Patterns,
    path: '/patterns',
    title: () => <h1 className="fw-700 align-right title">Patterns</h1>
  },
  {
    component: <div>WIPs</div>,
    object: Wips,
    path: '/wips',
    title: () => <h1 className="fw-700 align-right title">WIPs</h1>
  },
];

export default routes