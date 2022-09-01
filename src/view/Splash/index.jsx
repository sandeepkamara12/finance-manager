import SplashIcon from '../../assets/images/splashicon.svg';
import { NavLink } from 'react-router-dom';
export default function Splash() {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-splash h-screen flex items-center justify-center bg-cover">
         <div>
            <NavLink to="/login">
               <img src={SplashIcon} alt="" className='h-20' />
            </NavLink>
         </div>
      </div>
   );
}
