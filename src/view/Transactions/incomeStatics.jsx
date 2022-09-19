import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AgChartsReact } from "ag-charts-react";
import DatePicker from 'react-date-picker';
import moment from 'moment';

export default function IncomeStatics() {
   const [value, onChange] = useState(new Date());

   const options = {
      data: [
         {
            label: "Upwork",
            value: 50,
            chartLabel: "Upwork 50%"
         },
         {
            label: "Monthly Salary",
            value: 25,
            chartLabel: "Monthly Salary 25%"
         },
         {
            label: "Freelance",
            value: 25,
            chartLabel: "Freelance 25%"
         }
      ],
      series: [
         {
            type: "pie",
            angleKey: "value",
            labelKey: "chartLabel",
            showInLegend: false,
            strokeWidth: 1,
            strokes: ['#ffffff'],
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
                  {/* <h4 className='flex items-center relative w-2/5 text-12 font-semibold'>
                     <DatePicker onChange={onChange} value={value} calendarIcon={<FontAwesomeIcon icon={faCalendar} size="lg" />} clearIcon={null} />
                     <span className="">{moment(value).format("MMM Do YYYY")}</span>
                  </h4> */}
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
                  <NavLink to="/income-statics" className="meta w-1/2 text-center border-b border-pink pb-1">
                     <div>
                        <span className="block text-12 leading-16 font-normal text-pink">Income</span>
                        <span className="amount text-13 leading-16 font-medium block text-pink">₹ 90,000</span>
                     </div>
                  </NavLink>
                  <NavLink to="/transactions" className="meta w-1/2 text-center pb-1">
                     <div>
                        <span className="block text-12 leading-16 font-normal text-tabColor">Expense</span>
                        <span className="amount text-13 leading-16 font-bold block text-tabColor">₹ 82,632.00</span>
                     </div>
                  </NavLink>
               </div>
            </div>
            <div className="py-10 flex flex-wrap items-center justify-center fixed w-full pie-wrap shadow-headerShadow bg-white dashboard-header" style={{ zIndex: 1 }}>
               <div className="w-full mx-auto">
                  <AgChartsReact options={options} />
               </div>
            </div>
            <div className="expense-listing">
               <ul className="expense-list-wrap overflow-auto h-full">
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-other text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">50%</span>
                        <span className="expense-type font-medium text-12 leading-16">Upwork</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-diesel text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">25%</span>
                        <span className="expense-type font-medium text-12 leading-16">Monthly Salary</span>
                     </span>
                     <span className="expense-right-wrap w-2/6">
                        <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ 47,890.00</span>
                     </span>
                  </li>
                  <li className="flex flex-wrap items-center justify-between py-2 px-3">
                     <span className="expense-left-wrap w-4/6">
                        <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-vedik text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">25%</span>
                        <span className="expense-type font-medium text-12 leading-16">Freelance</span>
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