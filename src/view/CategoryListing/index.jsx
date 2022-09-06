import Layout from "../../Layout";
import EditCategory from '../../assets/images/edit-category.svg';
import DragCategory from '../../assets/images/drag-category.svg';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryListing = () => {
   const items = [
      "Communication",
      "Electricity",
      "Grocery",
      "House rent",
      "LPG",
      "Life & Entertainment",
      "Personal",
      "Medical",
      "Restaurant",
      "Shopping",
      "Transportation",
      "Vehicle",
      "Others"
   ];
   let [listItems, setListItems] = useState(items);
   const deletedListItem = (e) => {
      let itemNeedToBeDelete = e.target.id;
      let temp = [...listItems];
      temp.splice(itemNeedToBeDelete, 1);
      setListItems(temp);
   };
   return (
      <>
         <Layout>
            <div className="h-screen adjust-scrollbar overflow-auto  bg-white">
               <div className="dashboard-header fixed top-0 bg-white left-0 right-0 shadow-headerShadow">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase font-semibold text-black text-14 leading-20 flex flex-wrap items-center justify-between'>
                        <span>expense category</span>
                        <NavLink to="/add-category" className="flex flex-wrap items-center justify-center add-category bg-income-gradient rounded-full text-white w-6 h-6 font-normal">+</NavLink>
                     </h1>
                  </div>
               </div>
               <div className="px-5">
                  <ul className="">
                     {listItems.map((item, index) => (
                        <li className="flex flex-wrap items-center justify-between py-1" key={index}>
                           <span className="expense-left-wrap w-4/6 flex flex-wrap items-center">
                              <span onClick={deletedListItem} id={index} className="bg-pink rounded-full w-4 h-4 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3 leading-16">-</span>
                              <span className="text-12 capitalize">{`${item}`}</span>
                           </span>
                           <span className="expense-right-wrap w-2/6">
                              <span className="font-semibold flex flex-wrap items-center justify-end">
                                 <img src={EditCategory} alt="" srcSet="" className="" />
                                 {/* <img src={DragCategory} alt="" srcSet="" /> */}
                              </span>
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Layout>
      </>
   );
}
export default CategoryListing;