import Layout from "../../Layout";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
   const history = useNavigate();
   const formik = useFormik({
      initialValues: {
         category: 'Add New Category Name',
      },
      validationSchema: Yup.object().shape({
         category: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
      }),
      onSubmit: values => {
         console.log(JSON.stringify(values, null, 2));
         history('/category-listing');
      },
   });
   return (
      <>
         <Layout>
            <div className="add-expense bg-white adjust-scrollbar overflow-auto h-full">
               <div className="expense-form dashboard-header fixed top-0 bg-white left-0 right-0 shadow-headerShadow">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase text-center font-semibold text-pink text-14 leading-20'>Add Category</h1>
                  </div>
               </div>

               <form onSubmit={formik.handleSubmit} className="px-5">
                  <div className="field-wrap mb-3 flex flex-wrap items-center">
                     <input
                        id="category"
                        name="category"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        className='fields text-12 leading-16 text-black font-medium border-b border-border py-3 px-2 w-full inline-block'
                     />
                  </div>
                  <div className="buttons-wrap mt-4 flex flex-wrap items-center justify-center">
                     <button type="submit" className='custom-btn text-white bg-pink rounded-full text-12 leading-20 font-semibold w-full'>Save</button>
                  </div>
               </form>

            </div>
         </Layout>
      </>
   );
}