import Layout from '../../Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select'
import { useEffect, useState } from 'react';

export default function AddExpense() {
   const [valueState, setValueState] = useState("cash");

   const selectHandler = (event) => {
      const value = event.value
      setValueState(value)
      console.log(valueState);
   }

   const options = [
      { value: 'cash', label: 'Cash' },
      { value: 'debit-card', label: 'Debit Card' },
      { value: 'credit-card', label: 'Credit Card' }
   ];

   const formik = useFormik({
      initialValues: {
         paymentType: 'Cash',
         category: 'Fruits',
         date: new Date(),
      },
      validationSchema: Yup.object().shape({
         amount: Yup.number()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
      }),
      onSubmit: values => {
         alert(JSON.stringify(values, null, 2));
      },
   });

   return (
      <Layout>
         <div className="h-screen bg-white">
            <div className="add-expense adjust-scrollbar overflow-auto h-full">

               <div className="expense-form fixed top-0 left-0 right-0 bg-white dashboard-header shadow-headerShadow">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase text-center font-semibold text-pink text-14 leading-18'>Add Expense</h1>
                  </div>
               </div>

               <div className="buttons-wrap mb-6 flex items-center justify-center px-5">
                  <button className='custom-btn rounded-xs border border-border uppercase text-12 leading-16 font-semibold inline-block mr-5'>income</button>
                  <button className='custom-btn rounded-xs border border-pink uppercase text-12 leading-16 font-semibold inline-block text-pink'>expense</button>
               </div>

               <form onSubmit={formik.handleSubmit} className="px-5">
                  <div className="field-wrap mb-2 flex flex-wrap items-center">
                     <label htmlFor="date" className="text-12 leading-16 text-formLabel inline-block w-2/6">Date</label>
                     <input
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        className="fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6 bg-transparent"
                     />
                  </div>
                  <div className="field-wrap mb-2 flex flex-wrap items-center">
                     <label htmlFor="paymentType" className="text-12 leading-16 text-formLabel inline-block w-2/6">Account</label>
                     {/* <Select options={options} onChange={selectHandler} name="paymentType" id="paymentType" className='fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6 inline-block' /> */}
                     <input
                        id="paymentType"
                        name="paymentType"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.paymentType}
                        className='fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6 inline-block'
                     />
                  </div>
                  <div className="field-wrap mb-2 flex flex-wrap items-center">
                     <label htmlFor="category" className="text-12 leading-16 text-formLabel inline-block w-2/6">Category</label>
                     <input
                        id="category"
                        name="category"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        className="fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6"
                     />
                  </div>
                  <div className="field-wrap mb-2 flex flex-wrap items-center">
                     <label htmlFor="amount" className="text-12 leading-16 text-formLabel inline-block w-2/6">Amount</label>
                     <input
                        id="amount"
                        name="amount"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.amount}
                        className="fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6"
                     />
                  </div>
                  <div className="field-wrap mb-2 flex flex-wrap items-center">
                     <label htmlFor="note" className="text-12 leading-16 text-formLabel inline-block w-2/6">Note</label>
                     <input
                        id="note"
                        name="note"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.note}
                        className="fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6"
                     />
                  </div>
                  <div className="buttons-wrap my-8 flex flex-wrap items-center justify-center">
                     <button type="submit" className='custom-btn text-white lower-btn bg-pink rounded-full text-12 leading-20 font-semibold mr-3'>Save</button>
                     <button type="button" className='custom-btn text-white lower-btn bg-purple rounded-full text-12 leading-20 font-semibold'>Save & Continue</button>
                  </div>
               </form>

            </div>
         </div>
      </Layout>
   );
}