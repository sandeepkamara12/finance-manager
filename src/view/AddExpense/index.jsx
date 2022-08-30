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
   ]

   // useEffect(() => {
   // }, [])

   const formik = useFormik({
      initialValues: {
         paymentType: 'Cash',
         category: 'Fruits',
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

   // console.log(formik);

   return (
      <Layout>
         <div className="h-screen bg-white">
            <div className="add-expense">
               <div className="expense-form">
                  <div className="expense-header border-b border-border">
                     <h1 className='uppercase text-center font-semibold text-pink text-20 leading-24'>Add Expense</h1>
                  </div>
               </div>

               <div className="buttons-wrap my-8 flex items-center justify-center">
                  <button className='custom-btn rounded-xs border border-border uppercase text-14 leading-16 font-semibold inline-block mr-5'>income</button>
                  <button className='custom-btn rounded-xs border border-pink uppercase text-14 leading-16 font-semibold inline-block text-pink'>expense</button>
               </div>


               <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="paymentType">Payment Type</label>
                  <Select options={options} onChange={selectHandler} name="paymentType" id="paymentType" />
                  {/* <input
                     id="paymentType"
                     name="paymentType"
                     type="text"
                     onChange={formik.handleChange}
                     value={formik.values.paymentType}
                  /> */}
                  <br />
                  <label htmlFor="category">Category</label>
                  <input
                     id="category"
                     name="category"
                     type="text"
                     onChange={formik.handleChange}
                     value={formik.values.category}
                  />
                  <br />
                  <label htmlFor="amount">Amount</label>
                  <input
                     id="amount"
                     name="amount"
                     type="number"
                     onChange={formik.handleChange}
                     value={formik.values.amount}
                  />
                  <br />
                  <label htmlFor="note">Note</label>
                  <input
                     id="note"
                     name="note"
                     type="text"
                     onChange={formik.handleChange}
                     value={formik.values.note}
                  />
                  <br />
                  <button type="submit" className='custom-btn text-white bg-pink rounded-full text-14 leading-24 font-semibold'>Save</button>
                  <button type="button" className='custom-btn text-white bg-purple rounded-full text-14 leading-24 font-semibold'>Save & Continue</button>
               </form>

            </div>
         </div>
      </Layout>
   );
}