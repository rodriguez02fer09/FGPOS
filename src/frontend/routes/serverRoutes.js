import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Sales from '../containers/Sales';
import Inventory from '../containers/Inventory';
import Invoices from '../containers/Invoices';

const serverRoutes = (isLogged) => {
  return [{
      path: '/',
      component: isLogged ? Sales : Login,
      exact: true,
    },
    {
      path: '/sales',
      component: Sales,
      exact: true,
    },
    {
      path: '/inventory',
      component: Inventory,
      exact: true,
    },
    {
      path: '/invoices',
      component: Invoices,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;