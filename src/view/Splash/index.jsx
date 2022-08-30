import SplashIcon from '../../assets/images/splashicon.svg';
export default function Splash() {
   return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-splash h-screen flex items-center justify-center bg-cover">
         <div>
            <img src={SplashIcon} alt="" />
         </div>
      </div>
   );
}
