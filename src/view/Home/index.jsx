import { useState } from 'react';

import Layout from '../../Layout';
import Daily from '../../components/Daily';
import Weekly from '../../components/Weekly';
import Monthly from '../../components/Monthly';
import Yearly from '../../components/Yearly';

import DatePicker from 'react-date-picker';
import Select from 'react-select';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
   const maxDate = new Date();

   const [value, onChange] = useState(new Date());
   const [startDate, setStartDate] = useState(new Date("01-01-2020"));

   const minMonth = startDate.getMonth() + 1;
   const minYear = startDate.getFullYear();

   const maxMonth = maxDate.getMonth() + 1;
   const maxYear = maxDate.getFullYear();

   let currentMonth = value.getMonth() + 1;
   let currentYear = value.getFullYear();
   let [monthYear, setMonthYear] = useState({ "month": currentMonth, "year": currentYear });

   const onChangeDatePicker = (date) => {
      //Selected date via datepicker
      const d = new Date(date);

      // Update the date via date picker
      let currentMonthDigit = d.getMonth() + 1;
      let currentYears = d.getFullYear();
      setMonthYear({ "month": currentMonthDigit, "year": currentYears });
      onChange(d);
   }

   const nextMonths = min => {
      if (min.year !== maxYear) {
         if (min.month !== 12) {
            setMonthYear({ "month": min.month + 1, "year": min.year });
         }
         else {
            setMonthYear({ "month": 1, "year": min.year + 1 });
         }
      }
      else {
         if (min.month < maxMonth) {
            setMonthYear({ "month": min.month + 1, "year": min.year });
         }
      }
   }
   const prevMonths = min => {
      console.log("min", min);
      if (min.year > minYear) {
         if (min.month !== 1) {
            let monthLess = min.month - 1;
            setMonthYear({ month: monthLess, year: min.year });
         }
         else {
            let moreMonth = min.month + 11;
            let lessYear = min.year - 1;
            setMonthYear({ month: moreMonth, year: lessYear });
         }
      }
      else {
         if (min.month > minMonth) {
            let lessMonth = min.month === 1 ? 1 : min.month - 1;
            setMonthYear({ month: lessMonth, year: min.year });
         }
      }
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


   let printMonth = moment(String(monthYear.month).padStart(2, '0')).format("MMM");

   return (
      <Layout>
         <div className="mx-auto h-screen relative">
            <div className="text-black dashboard-adjust-scroll h-full">
               <div className="dashboard-header fixed top-0 left-0 right-0 px-5 py-2 bg-white shadow-headerShadow">
                  <div className="flex flex-wrap items-center justify-between">

                     <h4 className='flex items-center justify-between relative w-2/5 text-14'>
                        <button type="button" disabled={monthYear.month === minMonth && monthYear.year === minYear} onClick={() => prevMonths(monthYear)} className="date-button"><FontAwesomeIcon icon={faAngleLeft} size="lg" /></button>
                        {selectedValue !== 'annually' && (
                           <span className="relative">
                              <DatePicker onChange={onChangeDatePicker} value={value} minDate={startDate} maxDetail="year" maxDate={new Date()}
                                 calendarIcon={<FontAwesomeIcon icon={faCalendar} size="lg" />} clearIcon={null} />
                              {printMonth}
                           </span>
                        )}
                        <span>{monthYear.year}</span>
                        <button type="button" disabled={monthYear.month === maxMonth && monthYear.year === maxYear} onClick={() => nextMonths(monthYear)} className="date-button"><FontAwesomeIcon icon={faAngleRight} size="lg" /></button>
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