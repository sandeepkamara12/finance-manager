import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';

export default function Transactions() {

   const customStyles = {
      // option: (provided, state) => ({
      //    ...provided,
      //    borderBottom: '1px dotted pink',
      //    color: state.isSelected ? 'red' : 'blue',
      //    padding: 20,
      // }),
      // control: () => ({
      //    width: 200,
      //    border: '1px solid #ccccccc',
      // }),
      menu: () => ({
         width: 180,
      })
      // singleValue: (provided, state) => {
      //    const opacity = state.isDisabled ? 0.5 : 1;
      //    const transition = 'opacity 300ms';

      //    return { ...provided, opacity, transition };
      // }
   }

   const data = [
      { value: 'cash', label: 'Cash' },
      { value: 'debit-card', label: 'Debit Card' },
      { value: 'credit-card', label: 'Credit Card' }
   ];

   const [selectedValue, setSelectedValue] = useState(3);

   const handleChange = e => {
      setSelectedValue(e.value);
   }

   return (
      <Layout>
         <div className="h-screen bg-white py-5">
            <div className="top-area-wrap flex flex-wrap items-center justify-center">
               <h4 className='flex items-center justify-between relative pb-5 w-1/2'>
                  <FontAwesomeIcon icon={faAngleLeft} className="w-10" size="lg" />Aug 2022<FontAwesomeIcon icon={faAngleRight} className="w-10" size="lg" />
               </h4>
               <div className='flex items-center justify-between relative pb-5 w-1/2'>
                  <Select styles={customStyles} options={data} onChange={handleChange} value={data.filter(obj => obj.value === selectedValue)} name="paymentType" id="paymentType" className='text-16 leading-20 text-black font-medium py-3 px-2 w-full' />
               </div>
            </div>
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