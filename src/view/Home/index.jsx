import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../Layout';
import Select from 'react-select';
import { useState } from 'react';

export default function Home() {
   const customStyles = {
      menu: () => ({
         width: 150,
         display: 'block',
         position: 'absolute',
         backgroundColor: '#ffffff',
      }),
      option: () => ({
         fontSize: 14,
         fontFamily: 'Inter, sans-serif',
         padding: '5px 10px',
         '&:hover': { backgroundColor: '#6B14D1', color: '#ffffff' }
      }),
      indicatorSeparator: () => ({
         display: "none",
      }),
      dropdownIndicator: () => ({
         color: '#000000',
         right: 8,
         position: 'absolute'
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
         <div className="mx-auto h-screen relative">
            <div className="text-white">
               <div className="dashboard-header fixed top-0 left-0 right-0 p-5 bg-transaction-top bg-no-repeat">
                  <div className="flex flex-wrap items-center justify-between">
                     <h4 className='flex items-center justify-between relative w-2/5'>
                        <FontAwesomeIcon icon={faAngleLeft} size="lg" />Aug 2022<FontAwesomeIcon icon={faAngleRight} size="lg" />
                     </h4>
                     <div className='flex items-center justify-between relative w-2/5'>
                        <Select value={data.filter(obj => obj.value === selectedValue)} styles={customStyles} onChange={handleChange} options={data} name="paymentType" id="paymentType" className='text-16 leading-20 text-black font-medium w-full' />
                     </div>
                  </div>
                  <div className="meta-info flex flex-wrap items-center justify-between mt-4">
                     <div className="meta">
                        <span className="block text-14 leading-18 font-normal text-pink">Income</span>
                        <span className="amount text-18 leading-20 font-bold pt-1 block text-pink">₹ 80,000</span>
                     </div>
                     <div className="meta">
                        <span className="block text-14 leading-18 font-normal text-purple">Expense</span>
                        <span className="amount text-18 leading-20 font-bold pt-1 block text-purple">₹ 25,000</span>
                     </div>
                     <div className="meta">
                        <span className="block text-14 leading-18 font-normal text-textColor">Total Balance</span>
                        <span className="amount text-18 leading-20 font-bold pt-1 block text-textColor">₹ 55,000</span>
                     </div>
                  </div>
               </div>

               <div className='expense-listing-wrap px-5 adjust-scroll-spacing'>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-3 items-center'>
                        <span className='text-18 text-black leading-22 font-semibold tracking-tight'>Monday, 22 August</span>
                        <span className='text-18 leading-22 font-semibold text-red tracking-tighter'>₹ 2400.00</span>
                     </h3>
                     <div className="datewise-total-expense py-3 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Fruits</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹  450.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Pillow with cover</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹ 1950.00</div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-3 items-center'>
                        <span className='text-18 text-black leading-22 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-18 leading-22 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-3 border-y border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Chair Cover</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Fruits</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-3 items-center'>
                        <span className='text-18 text-black leading-22 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-18 leading-22 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-3 border-t border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Chair Cover</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Fruits</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-3 items-center'>
                        <span className='text-18 text-black leading-22 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-18 leading-22 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-3 border-t border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Chair Cover</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Fruits</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹ 450.00</div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="datewise-expense">
                     <h3 className='flex flex-wrap justify-between py-3 items-center'>
                        <span className='text-18 text-black leading-22 font-semibold tracking-tight'>Monday, 12 August</span>
                        <span className='text-18 leading-22 font-semibold text-red tracking-tighter'>₹ 850.00</span>
                     </h3>
                     <div className="datewise-total-expense py-3 border-t border-border">

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Online Shopping</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Chair Cover</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹  400.00</div>
                           </div>
                        </div>

                        <div className="daywise-expense flex flex-wrap justify-between py-2">
                           <div className="expense-left w-4/6 flex flex-wrap">
                              <div className='w-1/2 text-16 leading-20 text-purple font-semibold'>Fruits</div>
                              <div className="w-1/2 expense-note-payment-type">
                                 <span className='font-medium leading-18 text-15 text-black block'>Fruits</span>
                                 <span className='text-15 leading-18 text-textColor'>Cash</span>
                              </div>
                           </div>
                           <div className="expense-right w-2/6">
                              <div className='text-16 leading-20 font-semibold text-red tracking-tighter text-right'>₹ 450.00</div>
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