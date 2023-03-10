import AddExpenseIcon from '../assets/images/add-expense-icon.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const Footer = () => {
   const location = useLocation();
   const [amountY, setAmountY] = useState(window.scrollHeight || 0);
   const [scrollDirection, setScrollDirection] = useState("up");

   const handleNavigation = useCallback(() => {
      if (amountY > window.scrollY) {
         setScrollDirection("up");
      }
      else if (amountY < window.scrollY) {
         setScrollDirection("down");
      }
      setAmountY(window.scrollY)
   }, [amountY]);



   useEffect(() => {
      window.addEventListener("scroll", handleNavigation);
      return () => { window.removeEventListener("scroll", handleNavigation) };
   }, [handleNavigation]);

   return (
      <div className={`footer fixed left-0 right-0 bottom-0 bg-white flex items-end justify-between pb-5 ${scrollDirection === 'up' ? 'showFooter' : 'hideFooter'}`}>
         <div className={`footer-tab w-1/5 flex items-center justify-center  ${location.pathname === "/home" && "active"}`}>
            <Link to="/home">
               <svg width="20" height="21" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 30.0975V22.5975C19.5 21.404 19.0259 20.2594 18.182 19.4155C17.3381 18.5716 16.1935 18.0975 15 18.0975C13.8065 18.0975 12.6619 18.5716 11.818 19.4155C10.9741 20.2594 10.5 21.404 10.5 22.5975V30.0975H3C2.20435 30.0975 1.44129 29.7814 0.87868 29.2188C0.316071 28.6562 1.38884e-10 27.8931 1.38884e-10 27.0975V10.7955C-4.98411e-06 10.2774 0.134146 9.76821 0.38939 9.31739C0.644633 8.86657 1.01227 8.48954 1.4565 8.223L13.4565 1.023C13.9227 0.743243 14.4563 0.595467 15 0.595467C15.5437 0.595467 16.0773 0.743243 16.5435 1.023L28.5435 8.223C28.9877 8.48954 29.3554 8.86657 29.6106 9.31739C29.8659 9.76821 30 10.2774 30 10.7955V27.0975C30 27.8931 29.6839 28.6562 29.1213 29.2188C28.5587 29.7814 27.7957 30.0975 27 30.0975H19.5Z" fill="#AAAAAA" />
               </svg>
            </Link>
         </div>
         <div className={`footer-tab w-1/5 flex items-center justify-center ${(location.pathname === "/transactions") || (location.pathname === "/income-statics") ? "active" : ""}`}>
            <Link to="/transactions" >
               <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.5 21.375H2.25V27.75H6.5V21.375ZM17.125 12.875H12.875V27.75H17.125V12.875ZM27.75 2.25H23.5V27.75H27.75V2.25ZM23.5 0.125C22.9364 0.125 22.3959 0.348883 21.9974 0.747398C21.5989 1.14591 21.375 1.68641 21.375 2.25V27.75C21.375 28.3136 21.5989 28.8541 21.9974 29.2526C22.3959 29.6511 22.9364 29.875 23.5 29.875H27.75C28.3136 29.875 28.8541 29.6511 29.2526 29.2526C29.6511 28.8541 29.875 28.3136 29.875 27.75V2.25C29.875 1.68641 29.6511 1.14591 29.2526 0.747398C28.8541 0.348883 28.3136 0.125 27.75 0.125H23.5ZM10.75 12.875C10.75 12.3114 10.9739 11.7709 11.3724 11.3724C11.7709 10.9739 12.3114 10.75 12.875 10.75H17.125C17.6886 10.75 18.2291 10.9739 18.6276 11.3724C19.0261 11.7709 19.25 12.3114 19.25 12.875V27.75C19.25 28.3136 19.0261 28.8541 18.6276 29.2526C18.2291 29.6511 17.6886 29.875 17.125 29.875H12.875C12.3114 29.875 11.7709 29.6511 11.3724 29.2526C10.9739 28.8541 10.75 28.3136 10.75 27.75V12.875ZM0.125 21.375C0.125 20.8114 0.348883 20.2709 0.747398 19.8724C1.14591 19.4739 1.68641 19.25 2.25 19.25H6.5C7.06359 19.25 7.60409 19.4739 8.0026 19.8724C8.40112 20.2709 8.625 20.8114 8.625 21.375V27.75C8.625 28.3136 8.40112 28.8541 8.0026 29.2526C7.60409 29.6511 7.06359 29.875 6.5 29.875H2.25C1.68641 29.875 1.14591 29.6511 0.747398 29.2526C0.348883 28.8541 0.125 28.3136 0.125 27.75V21.375Z" fill="#AAAAAA" />
               </svg>
            </Link>
         </div>
         <div className={`footer-tab w-1/5 flex items-center justify-center`}>
            <Link to="/add-expense" className="absolute add-expense-plus-icon shadow-plusIconShadow rounded-full w-10">
               <img src={AddExpenseIcon} alt="" className='w-full' />
            </Link>
         </div>
         <div className={`footer-tab w-1/5 flex items-center justify-center ${(location.pathname === "/add-expense") || (location.pathname === "/add-income") ? "active" : ""}`}>
            <Link to="/add-expense" >
               <svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.5061 1.68793C30.9718 1.15355 30.3375 0.729651 29.6394 0.440443C28.9413 0.151235 28.193 0.00238037 27.4374 0.00238037C26.6817 0.00238037 25.9335 0.151235 25.2353 0.440443C24.5372 0.729651 23.9029 1.15355 23.3686 1.68793L11.2953 13.7613C11.1543 13.9017 11.0541 14.0777 11.0055 14.2706L8.81033 23.0512C8.76457 23.235 8.76714 23.4274 8.81777 23.6099C8.8684 23.7924 8.96538 23.9586 9.09928 24.0925C9.23318 24.2264 9.39945 24.3234 9.58191 24.374C9.76438 24.4247 9.95685 24.4272 10.1406 24.3815L18.9212 22.1863C19.1147 22.1387 19.2915 22.0393 19.4327 21.8988L31.5061 9.82538C32.0405 9.2911 32.4644 8.65679 32.7536 7.95868C33.0428 7.26056 33.1916 6.51231 33.1916 5.75665C33.1916 5.001 33.0428 4.25275 32.7536 3.55463C32.4644 2.85651 32.0405 2.2222 31.5061 1.68793ZM24.9206 3.2399C25.5881 2.57242 26.4934 2.19743 27.4374 2.19743C28.3813 2.19743 29.2866 2.57242 29.9541 3.2399C30.6216 3.90739 30.9966 4.81269 30.9966 5.75665C30.9966 6.70062 30.6216 7.60592 29.9541 8.2734L18.0937 20.1317L11.3831 21.8088L13.0602 15.0982L24.9206 3.2399ZM15.3629 4.65798C15.9775 4.65798 16.579 4.70188 17.1695 4.78091L19.0442 2.90624C15.7855 2.1029 12.3535 2.38853 9.27252 3.71946C6.19151 5.0504 3.63098 7.35345 1.98217 10.2767C0.333368 13.2 -0.313032 16.5826 0.141747 19.9079C0.596526 23.2331 2.12747 26.318 4.50065 28.6912C6.87383 31.0643 9.95873 32.5953 13.284 33.0501C16.6092 33.5048 19.9919 32.8584 22.9151 31.2096C25.8384 29.5608 28.1414 27.0003 29.4724 23.9193C30.8033 20.8383 31.0889 17.4063 30.2856 14.1476L28.4109 16.0223C28.7788 18.6791 28.3268 21.3849 27.1154 23.7778C25.904 26.1708 23.9908 28.1369 21.6318 29.4131C19.2728 30.6894 16.5804 31.2151 13.9146 30.9198C11.2487 30.6246 8.73659 29.5225 6.71404 27.7609C4.6915 25.9994 3.25496 23.6623 2.59653 21.0623C1.93809 18.4622 2.08915 15.7231 3.0295 13.2112C3.96985 10.6993 5.65467 8.53441 7.85866 7.00593C10.0626 5.47746 12.6808 4.65829 15.3629 4.65798Z" fill="#AAAAAA" />
               </svg>
            </Link>
         </div>
         <div className={`footer-tab user-tab w-1/5 flex items-center justify-center ${((location.pathname === "/account") || (location.pathname === "/add-category") || (location.pathname === "/category-listing")) ? "active" : ""}`}>
            <Link to="/account" >
               <svg width="26" height="26" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_177_135)">
                     <path d="M18 22.5C22.9706 22.5 27 18.4706 27 13.5C27 8.52944 22.9706 4.5 18 4.5C13.0294 4.5 9 8.52944 9 13.5C9 18.4706 13.0294 22.5 18 22.5Z" stroke="#AAAAAA" strokeWidth="2.25" strokeMiterlimit="10" />
                     <path d="M4.35938 30.375C5.74163 27.9803 7.72992 25.9918 10.1244 24.6092C12.5188 23.2266 15.2351 22.4987 18 22.4987C20.7649 22.4987 23.4812 23.2266 25.8756 24.6092C28.2701 25.9918 30.2584 27.9803 31.6406 30.375" stroke="#AAAAAA" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                     <clipPath id="clip0_177_135">
                        <rect width="36" height="36" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
            </Link>
         </div>
      </div >
   );
}
export default Footer;