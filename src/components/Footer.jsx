import Home from '../assets/images/home.svg';
import Bar from '../assets/images/bars.svg';
import Edit from '../assets/images/edit.svg';
import User from '../assets/images/user.svg';

const Footer = () => {
   return (
      <div className="footer fixed left-0 right-0 bottom-0 bg-white flex items-center justify-between">
         <div className="footer-tab w-1/4 flex items-center justify-center">
            <img src={Home} alt="" />
         </div>
         <div className="footer-tab w-1/4 flex items-center justify-center">
            <img src={Bar} alt="" />
         </div>
         <div className="footer-tab w-1/4 flex items-center justify-center">
            <img src={Edit} alt="" />
         </div>
         <div className="footer-tab w-1/4 flex items-center justify-center">
            <img src={User} alt="" />
         </div>
      </div>
   );
}
export default Footer;