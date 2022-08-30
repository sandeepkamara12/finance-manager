import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';

export default function Transactions() {
   return (
      <Layout>
         <div className="h-screen bg-white">
            <div className="expense-listing">
               <ul className="expense-list-wrap">
                  <li className="flex flex-wrap items-center justify-between">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage expense-category-other text-white font-semibold inline-flex flex-wrap items-center justify-center mr-3">58%</span>
                        <span className="expense-type font-medium">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage expense-category-diesel text-white font-semibold inline-flex flex-wrap items-center justify-center mr-3">58%</span>
                        <span className="expense-type font-medium">Diesel</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-3">58%</span>
                        <span className="expense-type font-medium">Vedik</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-3">58%</span>
                        <span className="expense-type font-medium">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right">₹ 47,890.00</span>
                     </span>
                  </li>
               </ul>
            </div>
         </div>
      </Layout>
   );
}