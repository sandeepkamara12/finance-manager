import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';
import { AgChartsReact } from "ag-charts-react";

export default function Transactions() {

   const options = {
      data: [
         {
            label: "Car Maintenance",
            value: 56.9
         },
         {
            label: "Vedik",
            value: 22.5
         },
         {
            label: "Diesel",
            value: 6.8
         },
         {
            label: "Other",
            value: 6.8
         }
      ],
      series: [
         {
            type: "pie",
            angleKey: "value",
            labelKey: "label",
            showInLegend: false,
            // label: 
         }
      ]
   };

   const customStyles = {
      option: (styles, state) => ({
         ...styles,
         fontSize: 12,
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
      }),
      control: base => ({
         ...base,
         height: 30,
         minHeight: 30
      }),
      indicatorsContainer: (provided, state) => ({
         ...provided,
         height: '30px',
      }),
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
         <div className="bg-white transaction-adjust-scroll">
            <div className="dashboard-header fixed top-0 left-0 right-0 pt-2 bg-white border-b border-border">
               <div className="flex flex-wrap items-center justify-between px-5">
                  <h4 className='flex items-center justify-between relative w-2/5 text-14'>
                     <FontAwesomeIcon icon={faAngleLeft} size="lg" />Aug 2022<FontAwesomeIcon icon={faAngleRight} size="lg" />
                  </h4>
                  <div className='flex items-center justify-end relative w-3/5'>
                     <div className='w-2/3 inline-block'>
                        <Select value={data.filter(obj => obj.value === selectedValue)} isSearchable={false} styles={customStyles} onChange={handleChange} options={data} name="paymentType" id="paymentType" className='text-12 leading-16 text-black font-medium w-full' />
                     </div>
                  </div>
               </div>
               <div className="meta-info flex flex-wrap items-center justify-between mt-1">
                  <div className="meta w-1/2 text-center pb-1">
                     <span className="block text-12 leading-16 font-normal text-tabColor">Income</span>
                     <span className="amount text-13 leading-16 font-medium block text-tabColor">₹ 90,000</span>
                  </div>
                  <div className="meta w-1/2 text-center border-b border-pink pb-1">
                     <span className="block text-12 leading-16 font-normal text-pink">Expense</span>
                     <span className="amount text-13 leading-16 font-bold block text-pink">₹ 82,632.00</span>
                  </div>
               </div>
            </div>
            <div className="py-2 flex flex-wrap items-center justify-center fixed w-full pie-wrap shadow-headerShadow bg-white dashboard-header">
               <div className="w-50 mx-auto">
                  <AgChartsReact options={options} />
               </div>
            </div>
            <div className="expense-listing">
               <ul className="expense-list-wrap overflow-auto h-full">
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-other text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-diesel text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Diesel</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Vedik</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Car Maintenance</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
               </ul>
            </div>
         </div>
      </Layout>
   );
}