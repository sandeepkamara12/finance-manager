import { useState } from 'react';

import Layout from '../../Layout';
import Daily from '../../components/Daily';
import Weekly from '../../components/Weekly';
import Monthly from '../../components/Monthly';
import Yearly from '../../components/Yearly';

import DatePicker from 'react-date-picker';
import Select from 'react-select';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
   const [value, onChange] = useState(new Date());
   const [startDate, setStartDate] = useState(new Date("01-01-2020"));

   //Show the default daily data values using current month and year
   let today = new Date();
   let currentMonth = moment(String(today.getMonth() + 1).padStart(2, '0')).format("MMMM");
   let currentYear = today.getFullYear();
   let [monthYear, setMonthYear] = useState({ "month": currentMonth, "year": currentYear });

   const displayMonth = moment(String(value.getMonth() + 1).padStart(2, '0')).format("MMM");
   let displayYear = value.getFullYear();

   let [minMonthYear, setMinMonthYear] = useState({ "minMonth": startDate.getMonth() + 1, "minYear": startDate.getFullYear(), "maxMonth": today.getMonth(), "maxYear": currentYear });
   let [maxMonthYear, setMaxMonthYear] = useState({ "minMonth": startDate.getMonth() + 1, "minYear": startDate.getFullYear(), "maxMonth": today.getMonth() + 1, "maxYear": currentYear });

   const onChangeDatePicker = (date) => {
      const d = new Date(date);

      // Update the date via date picker
      let currentMonth = moment(String(d.getMonth() + 1).padStart(2, '0')).format("MMMM");
      let currentMonthDigit = d.getMonth() + 1;
      let currentYears = d.getFullYear();
      setMinMonthYear({ "minMonth": currentMonthDigit, "minYear": currentYears, "maxMonth": today.getMonth(), "maxYear": currentYear });
      setMonthYear({ month: currentMonth, year: currentYears });

      setMaxMonthYear({ "minMonth": startDate.getMonth() + 1, "minYear": startDate.getFullYear(), "maxMonth": currentMonthDigit, "maxYear": currentYears });
      // console.log('aa', maxMonthYear, currentMonthDigit, currentYears);
      onChange(d);

   }

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
      { value: 'monthly', label: 'Monthly' },
      { value: 'annually', label: 'Annually' }
   ];

   const [selectedValue, setSelectedValue] = useState("daily");

   const handleChange = e => {
      setSelectedValue(e.value);
   }

   const nextMonths = min => {
      console.log("hello");
      if (min.minYear !== min.maxYear) {
         if (min.minMonth !== 12) {
            let month = moment(String(min.minMonth + 1).padStart(2, '0')).format("MMMM");
            setMinMonthYear({ "minMonth": min.minMonth + 1, "minYear": min.minYear, "maxMonth": min.maxMonth, "maxYear": min.maxYear });
            setMonthYear({ "month": month, "year": min.minYear });
         }
         else {
            let month = moment(String(1).padStart(2, '0')).format("MMMM");
            setMinMonthYear({ "minMonth": 1, "minYear": min.minYear + 1, "maxMonth": min.maxMonth, "maxYear": min.maxYear });
            setMonthYear({ "month": month, "year": min.minYear + 1 });
         }
      }
      else {
         if (min.minMonth <= min.maxMonth) {
            let month = moment(String(min.minMonth + 1).padStart(2, '0')).format("MMMM");
            setMinMonthYear({ "minMonth": min.minMonth + 1, "minYear": min.minYear, "maxMonth": min.maxMonth, "maxYear": min.maxYear });
            setMonthYear({ "month": month, "year": min.minYear });
         }
      }
   }
   const prevMonths = min => {
      console.log("bye");
      if (min.maxYear > min.minYear) {
         if (min.maxMonth !== 1) {
            let monthLess = min.maxMonth - 1;
            setMaxMonthYear({ "minMonth": min.minMonth, "minYear": min.minYear, "maxMonth": monthLess, "maxYear": min.maxYear });
            setMonthYear({ month: moment(String(monthLess).padStart(2, '0')).format("MMMM"), year: min.maxYear });
         }
         else {
            let moreMonth = min.maxMonth + 11;
            let lessYear = min.maxYear - 1;
            setMaxMonthYear({ "minMonth": min.minMonth, "minYear": min.minYear, "maxMonth": moreMonth, "maxYear": lessYear });
            setMonthYear({ month: moment(String(moreMonth).padStart(2, '0')).format("MMMM"), year: lessYear });
         }
      }
      else {
         if (min.maxMonth >= min.minMonth) {
            let lessMonth = min.maxMonth - 1;
            setMaxMonthYear({ "minMonth": min.minMonth, "minYear": min.minYear, "maxMonth": lessMonth, "maxYear": min.maxYear });
            setMonthYear({ month: moment(String(lessMonth).padStart(2, '0')).format("MMMM"), year: min.maxYear });
         }
      }
   }

   return (
      <Layout>
         <div className="mx-auto h-screen relative">
            <div className="text-black dashboard-adjust-scroll h-full">
               <div className="dashboard-header fixed top-0 left-0 right-0 px-5 py-2 bg-white shadow-headerShadow">
                  <div className="flex flex-wrap items-center justify-between">

                     <h4 className='flex items-center justify-between relative w-2/5 text-14'>
                        <FontAwesomeIcon icon={faAngleLeft} size="lg" disabled={displayYear >= currentYear} onClick={() => prevMonths(maxMonthYear)} />
                        <span className="">
                           <DatePicker onChange={onChangeDatePicker} value={value} minDate={startDate} maxDetail="year" maxDate={new Date()}
                              calendarIcon={<FontAwesomeIcon icon={faCalendar} size="lg" />} clearIcon={null} />
                           {monthYear.month}
                        </span>
                        <span>{monthYear.year}</span>
                        <div disabled={displayYear <= Date.now()} onClick={() => nextMonths(minMonthYear)}><FontAwesomeIcon icon={faAngleRight} size="lg" /></div>
                     </h4>
                     <div className='flex items-center justify-end relative w-3/5'>
                        <div className='w-2/3 inline-block'>
                           <Select value={data.filter(obj => obj.value === selectedValue)} isSearchable={false} styles={customStyles} onChange={handleChange} options={data} name="paymentType" id="paymentType" className='text-12 leading-16 text-black font-medium w-full' />
                        </div>
                     </div>
                  </div>
                  <div className="meta-info flex flex-wrap items-center justify-between mt-1">
                     <div className="meta">
                        <span className="block text-12 leading-16 font-normal text-pink">Income</span>
                        <span className="amount text-13 leading-16 font-bold block text-pink">₹ 80,000</span>
                     </div>
                     <div className="meta">
                        <span className="block text-12 leading-16 font-normal text-purple">Expense</span>
                        <span className="amount text-13 leading-16 font-bold block text-purple">₹ 25,000</span>
                     </div>
                     <div className="meta">
                        <span className="block text-12 leading-16 font-normal text-textColor">Total Balance</span>
                        <span className="amount text-13 leading-16 font-bold block text-textColor">₹ 55,000</span>
                     </div>
                  </div>
               </div>

               <div className='expense-listing-wrap px-5'>
                  {
                     selectedValue === "daily" ? <Daily currentMonthYear={monthYear} /> : selectedValue === "weekly" ? <Weekly currentMonthYear={monthYear} /> : selectedValue === "monthly" ? <Monthly currentMonthYear={monthYear} /> : <Yearly currentMonthYear={monthYear} />
                  }
               </div>

            </div>
         </div>
      </Layout>
   );
}