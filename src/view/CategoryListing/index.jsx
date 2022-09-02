import Layout from "../../Layout";
import EditCategory from '../../assets/images/edit-category.svg';
import DragCategory from '../../assets/images/drag-category.svg';
import { NavLink } from "react-router-dom";
import DraggableList from "react-draggable-lists";

const CategoryListing = () => {
   const listItems = [
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

   return (
      <>
         <Layout>
            <div className="h-screen adjust-scrollbar  bg-white">
               <div className="dashboard-header fixed top-0 bg-white left-0 right-0">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase font-semibold text-pink text-20 leading-24 flex flex-wrap items-center justify-between'>
                        <span>expense category</span>
                        <NavLink to="/add-category" className="flex flex-wrap items-center justify-center add-category bg-income-gradient rounded-full text-white w-6 h-6 font-normal">+</NavLink>
                     </h1>
                  </div>
               </div>
               <div className="px-5 h-full">
                  <ul className="">
                     <DraggableList width={360} height={50} rowSize={1}>
                        {listItems.map((item, index) => (
                           <li className="flex flex-wrap items-center justify-between py-2" key={index}>
                              <span className="expense-left-wrap w-4/6">
                                 <span className="bg-pink rounded-full w-6 h-6 text-white font-normal inline-flex flex-wrap items-center justify-center mr-3">-</span>
                                 <span className="text-16 capitalize">{`${index + 1}.  ${item}`}</span>
                              </span>
                              <span className="expense-right-wrap w-2/6">
                                 <span className="font-semibold flex flex-wrap items-center justify-end">
                                    <img src={EditCategory} alt="" srcSet="" className="mr-5" />
                                    <img src={DragCategory} alt="" srcSet="" />
                                 </span>
                              </span>
                           </li>
                        ))}
                     </DraggableList>
                  </ul>
               </div>
            </div>
         </Layout>
      </>
   );
}
export default CategoryListing;