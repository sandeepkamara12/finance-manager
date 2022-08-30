import Splash from './view/Splash';
import NotFound from './view/NotFound';
import Transactions from './view/Transactions';
import Login from './view/Login';
import Home from './view/Home';
import AddExpense from './view/AddExpense';

const routes = [
   {
      path: "/",
      component: <Home />,
   },
   {
      path: "/not-found",
      component: <NotFound />,
   },
   {
      path: "/splash",
      component: <Splash />,
   },
   {
      path: "/transactions",
      component: <Transactions />,
   },
   {
      path: "/login",
      component: <Login />,
   },
   {
      path: "/add-expense",
      component: <AddExpense />,
   }
]

export default routes;