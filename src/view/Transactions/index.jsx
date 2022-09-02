import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
   plugins: {
      legend: {
         display: false,
      }
   },
};
export const datas = {
   labels: ['Other', 'Diesel', 'Vedik', 'Car Maintenance'],
   datasets: [
      {
         label: '# of Votes',
         data: [58, 20, 12, 10],
         backgroundColor: [
            '#989CF2',
            '#9019B8',
            '#CA2091',
            '#6B14D1',
         ],
         borderColor: [
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
         ],
         borderWidth: 1,
      },
   ],
};

export default function Transactions() {

   const customStyles = {
      option: (styles, state) => ({
         ...styles,
         fontSize: 14,
         fontFamily: 'Inter, sans-serif',
         backgroundColor: state.isSelected ? '#6B14D1' : '#ffffff',
         '&:hover': { backgroundColor: '#6B14D1', color: '#ffffff' }
      }),
      indicatorSeparator: () => ({
         display: "none",
      }),
      dropdownIndicator: (styles) => ({
         ...styles,
         color: '#000000',
      })
   }

   const data = [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'annually', label: 'Annually' }
   ];

   const [selectedValue, setSelectedValue] = useState("day");

   const handleChange = e => {
      setSelectedValue(e.value);
   }

   return (
      <Layout>
         <div className="h-screen bg-white transaction-adjust-scroll overflow-auto h-full">
            <div className="dashboard-header fixed top-0 left-0 right-0 pt-5 bg-white border-b border-border">
               <div className="flex flex-wrap items-center justify-between px-5">
                  <h4 className='flex items-center justify-between relative w-2/5'>
                     <FontAwesomeIcon icon={faAngleLeft} size="lg" />Aug 2022<FontAwesomeIcon icon={faAngleRight} size="lg" />
                  </h4>
                  <div className='flex items-center justify-between relative w-2/5'>
                     <Select value={data.filter(obj => obj.value === selectedValue)} styles={customStyles} onChange={handleChange} options={data} name="paymentType" id="paymentType" className='text-16 leading-20 text-black font-medium w-full' />
                  </div>
               </div>
               <div className="meta-info flex flex-wrap items-center justify-between mt-4">
                  <div className="meta w-1/2 text-center pb-2">
                     <span className="block text-16 leading-22 font-medium text-tabColor">Income</span>
                     <span className="amount text-18 leading-24 font-medium block text-tabColor">₹ 90,000</span>
                  </div>
                  <div className="meta w-1/2 text-center border-b border-pink pb-2">
                     <span className="block text-16 leading-22 font-bold text-pink">Expense</span>
                     <span className="amount text-18 leading-24 font-bold block text-pink">₹ 82,632.00</span>
                  </div>
               </div>
            </div>
            <div className="expense-listing">
               <div className="pb-10 flex flex-wrap items-center justify-center">
                  <div className="w-1/2">
                     <Pie data={datas} options={options} />
                  </div>
               </div>
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