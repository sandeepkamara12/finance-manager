import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';
import { AgChartsReact } from "ag-charts-react";
import { NavLink } from 'react-router-dom';
export default function Transactions() {

   const options = {
      data: [
         {
            label: "Communication",
            value: 5
         },
         {
            label: "Electricity",
            value: 7
         },
         {
            label: "Grocery",
            value: 5
         },
         {
            label: "House Rent",
            value: 5
         },
         {
            label: "LPG",
            value: 5
         },
         {
            label: "Life and Entertainment",
            value: 5
         },
         {
            label: "Personal",
            value: 5
         },
         {
            label: "Medical",
            value: 5
         },
         {
            label: "Resaurant",
            value: 5
         },
         {
            label: "Shopping",
            value: 5
         },
         {
            label: "Transportation",
            value: 5
         },
         {
            label: "Vehicle",
            value: 5
         },
         {
            label: "Other",
            value: 4
         }
      ],
      series: [
         {
            type: "pie",
            angleKey: "value",
            labelKey: "label",
            showInLegend: false,
            label: {
               fontSize: 10,
               fontWeight: '500',
               fontFamily: 'Inter'
            }
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
                  <NavLink to="/income-statics" className="meta w-1/2 text-center pb-1">
                     <div>
                        <span className="block text-12 leading-16 font-normal text-tabColor">Income</span>
                        <span className="amount text-13 leading-16 font-medium block text-tabColor">₹ 90,000</span>
                     </div>
                  </NavLink>
                  <NavLink to="/transactions" className="meta w-1/2 text-center border-b border-pink pb-1">
                     <div>
                        <span className="block text-12 leading-16 font-normal text-pink">Expense</span>
                        <span className="amount text-13 leading-16 font-bold block text-pink">₹ 82,632.00</span>
                     </div>
                  </NavLink>
               </div>
            </div>
            <div className="py-2 flex flex-wrap items-center justify-center fixed w-full pie-wrap shadow-headerShadow bg-white dashboard-header" style={{ zIndex: 1 }}>
               <div className="w-full mx-auto">
                  <AgChartsReact options={options} />
               </div>
            </div>
            <div className="expense-listing">
               <ul className="expense-list-wrap overflow-auto h-full">
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-other text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Communication</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-diesel text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Electricity</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Grocery</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">House Rent</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-other text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">LPG</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-diesel text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Life and Entertainment</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Personal</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Medical</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-diesel text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Resaurant</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Shopping</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Transportation</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Vehicle</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  {/* xhbd */}
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Shopping</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Transportation</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Vehicle</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Shopping</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Transportation</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Vehicle</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Shopping</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Transportation</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Vehicle</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Shopping</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Transportation</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Vehicle</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-car-maintenance text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">58%</span>
                        <span className="expense-type font-medium text-12 leading-16">Other</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
               </ul>
            </div>
         </div>
      </Layout >
   );
}