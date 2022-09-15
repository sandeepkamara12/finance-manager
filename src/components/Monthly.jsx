import { DATA } from '../DATA';
import moment from 'moment';

const Monthly = ({ currentMonthYear }) => {
   let currentMonth = moment(String(currentMonthYear.month).padStart(2, '0')).format("MMMM");

   return (
      DATA.map((yearly, index) => (
         yearly.year === currentMonthYear.year &&
         yearly.yearlyData.map((monthly, index) => (
            monthly.month === currentMonth &&
            <div className="datawise-expense" key={index}>
               <h3 className='flex flex-wrap justify-between py-2 items-center border-b border-border'>
                  <span className='text-13 text-black leading-18 font-semibold tracking-tight'>{monthly.month}</span>
                  <span className='text-13 leading-18 font-semibold text-red tracking-tighter'>₹ {monthly.monthlyAmount.toFixed(2)}</span>
               </h3>
            </div>
         ))
      ))
   )
}
export default Monthly;