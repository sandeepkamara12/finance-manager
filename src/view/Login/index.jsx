import { Link } from 'react-router-dom';
import FinanceManager from "../../assets/images/finance-manager.png";
import SplashIcon from "../../assets/images/splashicon.svg";
import Google from '../../assets/images/google.png';
export default function Login() {
   return (
      <div className="p-5 bg-login h-screen text-center overflow-y-auto flex flex-wrap items-center justify-center">
         <div className='top-area flex justify-center flex-wrap flex-column items-center'>
            <div className='w-full'>
               <img src={SplashIcon} className="m-auto h-20" />
            </div>
            <h3 className="py-4 text-pink text-18 leading-24 font-semibold">Finance <span className="text-purple">Manager</span></h3>
            <h2 className="text-18 leading-28 font-semibold">Seamlessly manage your Finances</h2>
            <p className="pt-3 pb-6 text-14 leading-24 text-textColor">Discover the revolutionary semi automated financial management experience.</p>
            <div className='w-full'>
               <Link to='/home' className='flex items-center justify-center py-3 px-6 bg-white rounded-full font-semibold text-13 leading-20 mb-4 w-4/6 mx-auto'>
                  <img src={Google} className='mr-2' />Continue with Google
               </Link>
            </div>

            <img src={FinanceManager} className='mx-auto h-60' />
         </div>
      </div>
   );
}