import Layout from "../../Layout";
import EditCategory from '../../assets/images/edit-category.svg';
import DragCategory from '../../assets/images/drag-category.svg';
import { NavLink } from "react-router-dom";

const CategoryListing = () => {
   return (
      <>
         <Layout>
            <div className="h-screen bg-white">
               <div className="">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase font-semibold text-pink text-20 leading-24 flex flex-wrap items-center justify-between'>
                        <span>expense category</span>
                        <NavLink to="/add-category" className="flex flex-wrap items-center justify-center add-category bg-income-gradient rounded-full text-white w-6 h-6 font-normal">+</NavLink>
                     </h1>
                  </div>
               </div>
               <div className="p-5">
                  <ul className="">
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">car maintenance</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">vegetable</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">fruits</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">baby expenses</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">my own expense</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">e bills</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">Mobile Bills</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">Internet bills</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">Car wash person salary</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">Maid salary</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                     <li className="flex flex-wrap items-center justify-between py-2">
                        <span className="expense-left-wrap w-4/6">
                           <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                           <span className="text-16 capitalize">Unexpectd Expense</span>
                        </span>
                        <span className="expense-right-wrap w-2/6">
                           <span className="font-semibold flex flex-wrap items-center justify-end">
                              <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                              <img src={DragCategory} alt="" srcSet="" />
                           </span>
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </Layout>
      </>
   );
}
export default CategoryListing;