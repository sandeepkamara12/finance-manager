import Splash from './view/Splash';
import NotFound from './view/NotFound';
import Transactions from './view/Transactions';
import Login from './view/Login';
import Home from './view/Home';
import AddExpense from './view/AddExpense';
import AddCategory from './view/AddCategory';
import Account from './view/Account';
import CategoryListing from './view/CategoryListing';

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
      path: "/home",
      component: <Home />,
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
   },
   {
      path: "/account",
      component: <Account />,
   },
   {
      path: "/add-category",
      component: <AddCategory />,
   },
   {
      path: "/category-listing",
      component: <CategoryListing />,
   }
]

export default routes;