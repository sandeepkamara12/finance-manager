import Splash from './view/Splash';
import NotFound from './view/NotFound';
import Transactions from './view/Transactions';
import IncomeStatics from './view/Transactions/incomeStatics';
import Login from './view/Login';
import Home from './view/Home';
import AddExpense from './view/AddExpense';
import AddIncome from './view/AddIncome';
import AddCategory from './view/AddCategory';
import Account from './view/Account';
import CategoryListing from './view/CategoryListing';

const routes = [
   {
      path: "/",
      component: <Login />,
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
      path: "/income-statics",
      component: <IncomeStatics />,
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
   },
   {
      path: "/add-income",
      component: <AddIncome />,
   }
]

export default routes;