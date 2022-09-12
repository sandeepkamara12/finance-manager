import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment';

export default function Home() {
   const [value, onChange] = useState(new Date());

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
         <div className="mx-auto h-screen relative">
            <div className="text-black dashboard-adjust-scroll h-full">
               <div className="dashboard-header fixed top-0 left-0 right-0 px-5 py-2 bg-white shadow-headerShadow">
                  <div className="flex flex-wrap items-center justify-between">
                     <h4 className='flex items-center relative w-2/5 text-12 font-semibold'>
                        <DatePicker onChange={onChange} value={value} calendarIcon={<FontAwesomeIcon icon={faCalendar} size="lg" />} clearIcon={null} />
                        <span className="">{moment(value).format("MMM Do YYYY")}</span>
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
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 22 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 2400.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  450.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Pillow with cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 1950.00</div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 22 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 2400.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  450.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Pillow with cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 1950.00</div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 22 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 2400.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  450.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Pillow with cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 1950.00</div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-2 items-center'>
                        <span className='text-13 text-black leading-18 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-1 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Chair Cover</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-1">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-16 text-12 text-black block'>Fruits</span>
                                 <span className='text-12 leading-16 text-textColor block'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>

            </div>
         </div>
      </Layout >
   );
}