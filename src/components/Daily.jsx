import { DATA } from '../DATA';
import moment from 'moment';

const Daily = ({ currentMonthYear }) => {
   return (
      <>
         {
            DATA.map((yearly, index) => (
               yearly.year === currentMonthYear.year &&
               yearly.yearlyData.map((monthly, index) => (
                  monthly.month === currentMonthYear.month &&
                  monthly.monthlyData.map((weekly, index) => (
                     weekly.weekData.map((daily, index) => (
                        <div className="datawise-expense" key={index}>
                           <h3 className='flex flex-wrap justify-between py-2 items-center'>
                              <span className='text-13 text-black leading-18 font-semibold tracking-tight'>{moment(daily.date).format("dddd, DD MMMM")}</span>
                              <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ {daily.dailyAmount.toFixed(2)}</span>
                           </h3>
                           <div className="datewise-total-expense py-1 border-y border-border">
                              {
                                 daily.dailyData.map((per, index) => (

                                    <div className="daywise-expense flex flex-wrap justify-between py-1" key={index} >
                                       <div className="expense-left w-4/6 flex flex-wrap">
                                          <div className='w-1/2 text-12 leading-16 text-purple font-semibold pr-2'>{per.category}</div>
                                          <div className="w-1/2 expense-note-payment-type">
                                             <span className='font-medium leading-16 text-12 text-black block'>{per.note}</span>
                                             <span className='text-12 leading-16 text-textColor block'>{per.type}</span>
                                          </div>
                                       </div>
                                       <div className="expense-right w-2/6">
                                          <div className='text-12 leading-16 font-semibold text-red tracking-tighter text-right pl-2'>₹ {per.amount.toFixed(2)}</div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                     ))
                  ))
               ))
            ))
         }
      </>
   )
}
export default Daily;