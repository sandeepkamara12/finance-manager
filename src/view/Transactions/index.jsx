import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';
import { AgChartsReact } from "ag-charts-react";
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { CATEGORY } from '../../DATA';
export default function Transactions() {
   const [selectedValue, setSelectedValue] = useState("daily");

   const options = {
      data: [
         {
            label: "Electricity",
            value: 5,
            chartLabel: "Electricity 5%"
         },
         {
            label: "Grocery",
            value: 5,
            chartLabel: "Grocery 5%"
         },
         {
            label: "House Rent",
            value: 5,
            chartLabel: "House Rent 5%"
         },
         {
            label: "LPG",
            value: 5,
            chartLabel: "LPG 5%"
         },
         {
            label: "Personal",
            value: 4,
            chartLabel: "Personal 4%"
         },
         {
            label: "Medical",
            value: 4,
            chartLabel: "Medical 4%"
         },
         // {
         //    label: "Communication",
         //    value: 10,
         //    chartLabel: "Communication 10%"
         // },
         // {
         //    label: "Life and Entertainment",
         //    value: 7,
         //    chartLabel: "Life and Entertainment 7%"
         // },
         // {
         //    label: "Resaurant",
         //    value: 5,
         //    chartLabel: "Resaurant 5%"
         // },
         // {
         //    label: "Shopping",
         //    value: 5,
         //    chartLabel: "Shopping 5%"
         // },
         // {
         //    label: "Transportation",
         //    value: 5,
         //    chartLabel: "Transportation 5%"
         // },
         // {
         //    label: "Vehicle",
         //    value: 5,
         //    chartLabel: "Vehicle 5%"
         // },
         // {
         //    label: "Other",
         //    value: 4,
         //    chartLabel: "Other 4%"
         // }
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
      { value: 'daily', label: 'Day' },
      { value: 'weekly', label: 'Week' },
      // { value: 'monthly', label: 'Monthly' },
      { value: 'annually', label: 'Annually' }
   ];


   const handleChange = e => {
      setSelectedValue(e.value);
   }


   return (
      <Layout>
         <div className="bg-white transaction-adjust-scroll">
            <div className="dashboard-header fixed top-0 left-0 right-0 pt-2 bg-white border-b border-border">
               <div className="flex flex-wrap items-center justify-between px-5">
                  <h4 className='flex items-center justify-between relative w-3/12 text-14'>
                     <button type="button" className="date-button"><FontAwesomeIcon icon={faAngleLeft} size="lg" /></button>
                     <span className='relative'>
                        <DatePicker maxDetail="year" calendarIcon={<FontAwesomeIcon icon={faCalendar} size="lg" />} clearIcon={null} />
                        Sep
                     </span>
                     <span>2022</span>
                     <button type="button" className="date-button"><FontAwesomeIcon icon={faAngleRight} size="lg" /></button>
                  </h4>
                  <div className='flex items-center justify-end relative w-9/12'>
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
            <div className="py-10 flex flex-wrap items-center justify-center fixed w-full pie-wrap shadow-headerShadow bg-white dashboard-header" style={{ zIndex: 1 }}>
               <div className="w-full mx-auto">
                  <AgChartsReact options={options} />
               </div>
            </div>
            <div className="expense-listing">
               <ul className="expense-list-wrap overflow-auto h-full">
                  {
                     CATEGORY.map((res, index) => (
                        <li className="flex flex-wrap items-center justify-between py-2 px-3" key={index}>
                           <span className="expense-left-wrap w-4/6">
                              <span className="expense-perentage h-6 w-12 rounded-xs text-12 leading-16 expense-category-other text-white font-semibold inline-flex flex-wrap items-center justify-center mr-2">{res.percentage}%</span>
                              <span className="expense-type font-medium capitalize text-12 leading-16">{res.category}</span>
                           </span>
                           <span className="expense-right-wrap w-2/6">
                              <span className="expense-amount font-semibold block text-right text-13 leading-16">₹ {res.amount}</span>
                           </span>
                        </li>
                     ))
                  }
               </ul>
            </div>
         </div>
      </Layout >
   );
}