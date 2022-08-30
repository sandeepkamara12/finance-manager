import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAngleUp, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
   return (
      <div className="mx-auto h-screen relative">
         <div className="bg-transaction-top pt-5 text-white bg-no-repeat">
            <h4 className='flex items-center justify-between relative px-3'>
               <FontAwesomeIcon icon={faAngleLeft} className="w-10" size="lg" />Aug 2022<FontAwesomeIcon icon={faAngleRight} className="w-10" size="lg" />
            </h4>
            <div className='p-5'>
               <h3 className='text-lg'>Harsh Vardhan</h3>
               <ul className="nav nav-tabs flex md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 mt-3" id="tabs-tab"
                  role="tablist">
                  <li className="nav-item w-1/4" role="presentation">
                     <a href="#day" className="py-2 px-6 bg-violet-700 rounded-xl text-sm" id="tabs-day-tab" data-bs-toggle="pill" data-bs-target="#tabs-day" role="tab" aria-controls="tabs-day"
                        aria-selected="true">Day</a>
                  </li>
                  <li className="nav-item w-1/4" role="presentation">
                     <a href="#day" className="py-4 px-6 text-sm" id="tabs-week-tab" data-bs-toggle="pill" data-bs-target="#tabs-week" role="tab" aria-controls="tabs-week"
                        aria-selected="false">Week</a>
                  </li>
                  <li className="nav-item w-1/4" role="presentation">
                     <a href="#day" className="py-4 px-6 text-sm" id="tabs-month-tab" data-bs-toggle="pill" data-bs-target="#tabs-month" role="tab" aria-controls="tabs-month"
                        aria-selected="false">Month</a>
                  </li>
                  <li className="nav-item w-1/4" role="presentation">
                     <a href="#day" className="py-2 px-6 text-sm" id="tabs-year-tab" data-bs-toggle="pill" data-bs-target="#tabs-year" role="tab" aria-controls="tabs-year"
                        aria-selected="false">Year</a>
                  </li>
               </ul>
               <div className="tab-content mt-10" id="tabs-tabContent">
                  <div className="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                     <div className='total-balance'>
                        <div className='bg-total-balancebg text-white p-5 rounded-xl'>
                           <h3 className='flex items-center'><span className='mr-1'>Total balance</span><FontAwesomeIcon icon={faAngleUp} size="xs" /></h3>
                           <h2 className='font-extrabold text-2xl mb-3'>₹ 55,000</h2>
                           <div className='columns-2'>
                              <div>
                                 <h4 className='flex items-center'><FontAwesomeIcon icon={faCircleArrowDown} size="xs" />  <span className='ml-1'>Income</span></h4>
                                 <strong>₹ 80,000</strong>
                              </div>
                              <div>
                                 <h4 className='flex items-center'><FontAwesomeIcon icon={faCircleArrowDown} size="xs" /> <span className='ml-1'>Expenses</span></h4>
                                 <strong>₹ 25,000</strong>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='tablesection text-black pt-7'>
                        <h3 className='border-b pb-2 mb-2'><strong>Monday, 22 August</strong><span className='float-right	text-orange-600'>₹ 2,400.00</span></h3>
                        <table className="table-auto text-sm w-full border-b">
                           <thead>
                           </thead>
                           <tbody>
                              <tr>
                                 <td className='text-violet-700 font-bold py-2'>Fruits</td>
                                 <td className='px-2 py-2'>Fruits <br /> <span className='opacity-40'>Cash</span></td>
                                 <td className='float-right flex text-orange-600 py-2'>₹  450.00</td>
                              </tr>
                              <tr>
                                 <td className='text-violet-700 font-bold py-2'>Online
                                    Shopping</td>
                                 <td className='px-2 py-2'>Pillow with cover <br /> <span className='opacity-40'>Cash</span></td>
                                 <td className='float-right flex text-orange-600 py-2'>₹  1950.00</td>
                              </tr>

                           </tbody>
                        </table>
                     </div>
                     <div className='tablesection text-black pt-3'>
                        <h3 className='border-b pb-2 mb-2'><strong>Monday, 12 August</strong><span className='float-right	text-orange-600'>₹ 8,50.00</span></h3>
                        <table className="table-auto text-sm w-full">
                           <thead>
                           </thead>
                           <tbody>
                              <tr>
                                 <td className='text-violet-700 font-bold py-2'>Online
                                    Shopping</td>
                                 <td className='px-2 py-2'>Pillow with cover <br /> <span className='opacity-40'>Cash</span></td>
                                 <td className='float-right flex text-orange-600 py-2'>₹  1950.00</td>
                              </tr>
                              <tr>
                                 <td className='text-violet-700 font-bold py-2'>Fruits</td>
                                 <td className='px-2 py-2'>Fruits <br /> <span className='opacity-40'>Cash</span></td>
                                 <td className='float-right flex text-orange-600 py-2'>₹  450.00</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <div className=''>

                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}