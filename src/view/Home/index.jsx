import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import IncomeIcon from '../../assets/images/income-arrow.svg';
import ExpenseIcon from '../../assets/images/expense-arrow.svg';
import Layout from '../../Layout';

export default function Home() {
   return (
      <Layout>
         <div className="mx-auto h-screen relative">
            <div className="text-white">
               <div className='p-5'>
                  <div className="dashboard-header fixed top-0 left-0 right-0 p-5">
                     <h4 className='flex items-center justify-between relative pb-5'>
                        <FontAwesomeIcon icon={faAngleLeft} className="w-10" size="lg" />Aug 2022<FontAwesomeIcon icon={faAngleRight} className="w-10" size="lg" />
                     </h4>
                     <h3 className='text-18 leading-22 font-medium text-white tracking-wide'>Harsh Vardhan</h3>

                     <ul className="flex flex-wrap mt-3">
                        <li className="w-1/4">
                           <a href="#day" className="block bg-purple text-center rounded py-3 text-13 leading-16">Day</a>
                        </li>
                        <li className="w-1/4">
                           <a href="#day" className="block text-center rounded py-3 text-13 leading-16">Week</a>
                        </li>
                        <li className="w-1/4">
                           <a href="#day" className="block text-center rounded py-3 text-13 leading-16">Month</a>
                        </li>
                        <li className="w-1/4">
                           <a href="#day" className="block text-center rounded py-3 text-13 leading-16">Year</a>
                        </li>
                     </ul>

                     <div className='total-balance mt-6'>
                        <div className='bg-total-balancebg text-white p-5 rounded-xl shadow-dashboardCard'>
                           <h3 className='flex items-center'>
                              <span className='mr-2 text-15 leading-20 capitalize font-normal'>Total balance</span>
                              <FontAwesomeIcon icon={faAngleUp} size="xs" />
                           </h3>
                           <h2 className='font-bold text-30 leading-36 text-white my-3'>₹ 55,000</h2>
                           <div className='flex items-start justify-between flex-wrap'>
                              <div>
                                 <h4 className='flex items-center my-2'>
                                    <img src={IncomeIcon} alt="" className='mr-2' />
                                    <span className='text-16 leading-20 font-medium text-white'>Income</span>
                                 </h4>
                                 <span className='text-20 leading-24 font-bold text-white'>₹ 80,000</span>
                              </div>
                              <div className='text-right'>
                                 <h4 className='flex items-center justify-end my-2'>
                                    <img src={ExpenseIcon} alt="" className='mr-2' />
                                    <span className='text-16 leading-20 font-medium text-white'>Expenses</span>
                                 </h4>
                                 <span className='text-20 leading-24 font-bold text-white'>₹ 25,000</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='expense-listing-wrap'>

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

                  </div>

               </div>
            </div>
         </div>
      </Layout>
   );
}