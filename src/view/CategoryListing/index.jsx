import Layout from "../../Layout";
import EditCategory from '../../assets/images/edit-category.svg';
import DragCategory from '../../assets/images/drag-category.svg';
import { useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryListing = () => {
   const items = [
      { name: "Communication", id: "communication" },
      { name: "Electricity", id: "electricity" },
      { name: "Grocery", id: "grocery" },
      { name: "House Rent", id: "house-rent" },
      { name: "LPG", id: "lpg" },
      { name: "Life & Entertainment", id: "life-entertainment" },
      { name: "Personal", id: "personal" },
      { name: "Medical", id: "medical" },
      { name: "Restaurant", id: "restaurant" },
      { name: "Shopping", id: "shopping" },
      { name: "Transportation", id: "transportation" },
      { name: "Vehicle", id: "vehicle" },
      { name: "Others", id: "others" },
   ];
   let [listItems, setListItems] = useState(items);
   let [activeModal, setActiveModal] = useState(false);
   let [deletedItem, setDeletedItem] = useState({});

   const makeModalActive = (item) => {
      setActiveModal(true);
      setDeletedItem(item);
   };
   const deleteItem = () => {
      let itemNeedToBeDelete = deletedItem.id;
      let temp = [...listItems];
      let idToBeRemove = temp.findIndex((obj) => {
         return obj.id === itemNeedToBeDelete
      });
      temp.splice(idToBeRemove, 1);
      setListItems(temp);
      setActiveModal(false);
   }

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
                              <span onClick={() => makeModalActive(item)} className="bg-pink rounded-full w-4 h-4 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3 leading-16">-</span>
                              <span className="text-12 capitalize">{`${item.name}`}</span>
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
            {activeModal &&
               <div className="remove-category-modal fixed w-full h-full flex flex-wrap items-center justify-center top-0 bottom-0 start-0 end-0 dashboard-header px-3">
                  <div className="remove-category text-center p-5 bg-white rounded">
                     <h2 className="text-14 leading-18">Do you wanna delete <strong>{deletedItem.name}</strong> category?</h2>
                     <div className="buttons-wrap mt-4 flex flex-wrap items-center justify-center">
                        <button className="custom-btn text-white lower-btn bg-pink rounded-full text-12 leading-20 font-semibold mr-3" onClick={deleteItem}>Yes</button>
                        <button className="custom-btn text-white lower-btn bg-purple rounded-full text-12 leading-20 font-semibold" onClick={() => setActiveModal(false)}>Cancel</button>
                     </div>
                  </div>
               </div>
            }
         </Layout>
      </>
   );
}
export default CategoryListing;