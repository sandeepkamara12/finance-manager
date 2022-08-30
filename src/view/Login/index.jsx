import { Link } from 'react-router-dom';
import FinanceManager from "../../assets/images/finance-manager.png";
import SplashIcon from "../../assets/images/splashicon.svg";

export default function Login() {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-login h-screen pt-16 text-center relative">
         <div>

            <img src={SplashIcon} className="m-auto w-12" />
            <h3 className="pt-3 text-pink-600 text-2xl font-bold">Finance <span className="text-violet-700">Manager</span></h3>
            <h2 className="pt-6 text-3xl font-bold">Seamlessly manage your Finances</h2>
            <p className="pt-3 text-slate-600 mb-3">Discover the revolutionary semi automated financial management experience.</p>
            {/* <a href=""><img src="src/assets/images/google.png" />Continue with Google</a> */}
            <Link to='/' className='inline-flex items-center py-3 px-6 bg-white rounded-3xl mt-5 font-bold text-sm'><img src="src/assets/images/google.png" className='mr-2' />Continue with Google</Link>
            <div className='financemanager_image absolute w-full bottom-0 left-5'>
               <img src={FinanceManager} />
            </div>
         </div>
      </div>
   );
}