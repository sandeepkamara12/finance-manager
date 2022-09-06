import { Link } from 'react-router-dom';
import FinanceManager from "../../assets/images/finance-manager.png";
import SplashIcon from "../../assets/images/splashicon.svg";
import Google from '../../assets/images/google.png';
export default function Login() {
   return (
      <div className="p-5 bg-login h-screen text-center overflow-y-auto flex flex-wrap items-center justify-center">
         <div className='top-area flex justify-center flex-wrap flex-column items-center'>
            <div className='w-full'>
               <img src={SplashIcon} className="m-auto h-16" />
            </div>
            <h3 className="pt-2 pb-3 text-pink text-14 leading-18 font-semibold">Finance <span className="text-purple">Manager</span></h3>
            <h2 className="text-16 leading-20 font-semibold">Seamlessly manage your Finances</h2>
            <p className="pt-2 pb-4 text-14 leading-20 text-textColor">Discover the revolutionary semi automated financial management experience.</p>
            <div className='w-full'>
               <Link to='/home' className='flex items-center justify-center py-3 px-6 bg-white rounded-full font-semibold text-13 leading-20 mb-2 w-4/6 mx-auto'>
                  <img src={Google} className='mr-2' />Continue with Google
               </Link>
            </div>

            <img src={FinanceManager} className='mx-auto h-48' style={{ minHeight: '192px' }} />
         </div>
      </div>
   );
}