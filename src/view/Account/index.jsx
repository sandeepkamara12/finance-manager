import Layout from '../../Layout';
import AccountProfile from '../../assets/images/account-profile.svg';
import AccountInExpense from '../../assets/images/account-inexpense.svg';
import Help from '../../assets/images/help.svg';
import Share from '../../assets/images/share.svg';
import { NavLink } from 'react-router-dom';

export default function Account() {
   return (
      <Layout>
         <div className="h-screen bg-white">
            <div className="add-expense">
               <div className="expense-form">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase text-center font-semibold text-pink text-20 leading-24'>Account</h1>
                  </div>
               </div>

               <div className="category-wrap my-8 flex items-center justify-center flex-wrap px-5">
                  <div className="category w-1/2 flex flex-wrap items-center justify-center flex-column text-center pb-6">
                     <div className="bg-profile-gradient w-full rounded-lg py-3 flex flex-wrap items-center justify-center flex-column">
                        <figure className='w-full'>
                           <NavLink to="/home">
                              <img src={AccountProfile} alt="Profile" className='mx-auto' />
                           </NavLink>
                        </figure>
                        <div className="pt-2 w-full text-white text-16 leading-26">
                           <NavLink to="/home">
                              Profile
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="category w-1/2 flex flex-wrap items-center justify-center flex-column text-center pb-6">
                     <div className="bg-income-gradient w-full rounded-lg py-3 flex flex-wrap items-center justify-center flex-column">
                        <figure className='w-full'>
                           <img src={AccountInExpense} alt="Profile" className='mx-auto' />
                        </figure>
                        <div className="pt-2 w-full text-white text-16 leading-26">Income Category</div>
                     </div>
                  </div>
                  <div className="category w-1/2 flex flex-wrap items-center justify-center flex-column text-center pb-6">
                     <div className="bg-profile-gradient w-full rounded-lg py-3 flex flex-wrap items-center justify-center flex-column">
                        <figure className='w-full'>
                           <NavLink to="/category-listing">
                              <img src={AccountInExpense} alt="Profile" className='mx-auto' />
                           </NavLink>
                        </figure>
                        <div className="pt-2 w-full text-white text-16 leading-26">
                           <NavLink to="/category-listing">
                              Expense Category
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="category w-1/2 flex flex-wrap items-center justify-center flex-column text-center pb-6">
                     <div className="bg-income-gradient w-full rounded-lg py-3 flex flex-wrap items-center justify-center flex-column">
                        <figure className='w-full'>
                           <img src={Help} alt="Profile" className='mx-auto' />
                        </figure>
                        <div className="pt-2 w-full text-white text-16 leading-26">Help</div>
                     </div>
                  </div>
                  <div className="category w-1/2 flex flex-wrap items-center justify-center flex-column text-center pb-6">
                     <div className="bg-income-gradient w-full rounded-lg py-3 flex flex-wrap items-center justify-center flex-column">
                        <figure className='w-full'>
                           <img src={Share} alt="Profile" className='mx-auto' />
                        </figure>
                        <div className="pt-2 w-full text-white text-16 leading-26">Share</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </Layout >
   );
}