import Layout from '../../Layout';
import AccountProfile from '../../assets/images/account-profile.svg';
import AccountInExpense from '../../assets/images/account-inexpense.svg';
import Help from '../../assets/images/help.svg';
import Share from '../../assets/images/share.svg';
import Excel from '../../assets/images/export-excel.svg';
import { NavLink } from 'react-router-dom';

export default function Account() {
   return (
      <Layout>
         <div className="h-screen">
            <div className="add-expense add-expense adjust-scrollbar overflow-auto h-full ">
               <div className="expense-form dashboard-header fixed top-0 left-0 right-0 bg-white shadow-headerShadow">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase text-center font-semibold text-black text-14 leading-18'>Account</h1>
                  </div>
               </div>

               <div className="category-wrap flex items-stretch justify-center flex-wrap px-5">
                  <div className="category w-1/3 flex flex-wrap items-center justify-center flex-column text-center pb-2">
                     <div className="bg-profile-gradient w-full rounded py-3 flex flex-wrap items-center justify-center flex-column px-2 h-full">
                        <figure className='w-full'>
                           <NavLink to="/home">
                              <img src={AccountProfile} alt="Profile" className='mx-auto w-6' style={{ "height": "24px" }} />
                           </NavLink>
                        </figure>
                        <div className="w-full pt-2 text-white text-11 leading-16">
                           <NavLink to="/home">
                              Profile
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="category w-1/3 flex flex-wrap items-center justify-center flex-column text-center pb-2">
                     <div className="bg-income-gradient w-full rounded py-3 flex flex-wrap items-center justify-center flex-column px-2 h-full">
                        <figure className='w-full'>
                           <img src={AccountInExpense} alt="Profile" className='mx-auto w-6' style={{ "height": "24px" }} />
                        </figure>
                        <div className="w-full pt-2 text-white text-11 leading-16">Income Category</div>
                     </div>
                  </div>
                  <div className="category w-1/3 flex flex-wrap items-center justify-center flex-column text-center pb-2">
                     <div className="bg-profile-gradient w-full rounded py-3 flex flex-wrap items-center justify-center flex-column px-2 h-full">
                        <figure className='w-full'>
                           <NavLink to="/category-listing">
                              <img src={AccountInExpense} alt="Profile" className='mx-auto w-6' style={{ "height": "24px" }} />
                           </NavLink>
                        </figure>
                        <div className="w-full pt-2 text-white text-11 leading-16">
                           <NavLink to="/category-listing">
                              Expense Category
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="category w-1/3 flex flex-wrap items-center justify-center flex-column text-center pb-2">
                     <div className="bg-income-gradient w-full rounded py-3 flex flex-wrap items-center justify-center flex-column px-2 h-full">
                        <figure className='w-full'>
                           <img src={Help} alt="Profile" className='mx-auto w-6' style={{ "height": "24px" }} />
                        </figure>
                        <div className="w-full pt-2 text-white text-11 leading-16">Help</div>
                     </div>
                  </div>
                  <div className="category w-1/3 flex flex-wrap items-center justify-center flex-column text-center pb-2">
                     <div className="bg-income-gradient w-full rounded py-3 flex flex-wrap items-center justify-center flex-column px-2 h-full">
                        <figure className='w-full'>
                           <img src={Share} alt="Profile" className='mx-auto w-6' style={{ "height": "24px" }} />
                        </figure>
                        <div className="w-full pt-2 text-white text-11 leading-16">Share</div>
                     </div>
                  </div>
                  <div className="category w-1/3 flex flex-wrap items-center justify-center flex-column text-center pb-2">
                     <div className="bg-income-gradient w-full rounded py-3 flex flex-wrap items-center justify-center flex-column px-2 h-full">
                        <figure className='w-full'>
                           <img src={Excel} alt="Export as Excel" className='mx-auto w-6' style={{ "height": "24px" }} />
                        </figure>
                        <div className="w-full pt-2 text-white text-11 leading-16">Export as Excel</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </Layout >
   );
}