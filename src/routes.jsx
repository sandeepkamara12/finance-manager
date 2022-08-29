import Splash from './view/Splash';
import NotFound from './view/NotFound';
import Transactions from './view/Transactions';
import Login from './view/Login';

const routes = [
   {
      path: "/",
      component: <Splash />,
   },
   {
      path: "/not-found",
      component: <NotFound />,
   },
   {
      path: "/transactions",
      component: <Transactions />,
   },
   {
      path: "/login",
      component: <Login />,
   }
]

export default routes;