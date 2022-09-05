import Layout from '../../Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select, { NonceProvider } from 'react-select'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function AddExpense() {
   const [selectedValue, setValueState] = useState("cash");
   const [selectedCat, setValueCat] = useState("lpg");

   const handleChange = e => {
      setValueState(e.value);
   }
   const handleCat = e => {
      setValueCat(e.value);
   }

   const customStyles = {
      option: (styles, state) => ({
         ...styles,
         fontSize: 12,
         fontFamily: 'Inter, sans-serif',
         backgroundColor: state.isSelected ? '#6B14D1' : '#ffffff',
         '&:hover': { backgroundColor: '#6B14D1', color: '#ffffff' }
      }),
      indicatorSeparator: () => ({
         display: "none",
      }),
      dropdownIndicator: (styles) => ({
         ...styles,
         color: '#000000',
         padding: 0,
      }),
      control: base => ({
         ...base,
         height: 18,
         minHeight: 18,
         border: 'none',
         boxShadow: 'none'
      }),
      placeholder: (styles) => ({
         ...styles,
         color: '#000000',
         margin: 0,
      }),
      valueContainer: (styles) => ({
         ...styles,
         padding: 0,
         '&:focus': { outline: 'none' }
      }),
      indicatorsContainer: (provided, state) => ({
         ...provided,
         height: '18px',
         padding: 0
      }),
   }

   const data = [
      { value: 'cash', label: 'Cash' },
      { value: 'debit-card', label: 'Debit Card' },
      { value: 'credit-card', label: 'Credit Card' }
   ];
   const cats = [
      { value: 'communication', label: 'Communication' },
      { value: 'electricity', label: 'Electricity' },
      { value: 'grocery', label: 'Grocery' },
      { value: 'house-rent', label: 'House rent' },
      { value: 'lpg', label: 'LPG' },
      { value: 'life', label: 'Life & Entertainment' },
      { value: 'personal', label: 'Personal' },
      { value: 'medical', label: 'Medical' },
      { value: 'restaurant', label: 'Restaurant' },
      { value: 'shopping', label: 'Shopping' },
      { value: 'transportation', label: 'Transportation' },
      { value: 'vehicle', label: 'Vehicle' },
      { value: 'others', label: 'Others' }
   ];
   // const [selectedValue, setSelectedValue] = useState("day");


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
                     <h1 className='uppercase text-center font-semibold text-black text-14 leading-18 flex flex-wrap items-center justify-center'>
                        <span className='text-black'><FontAwesomeIcon icon={faAngleLeft} size="lg" /></span>
                        <span className="mx-auto inline-block">Add Expense</span>
                     </h1>
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
                     <label htmlFor="paymentType" className="text-12 leading-16 text-formLabel inline-block w-2/6">Payment Type</label>
                     <Select value={data.filter(obj => obj.value === selectedValue)} isSearchable={false} options={data} styles={customStyles} onChange={handleChange} name="paymentType" id="paymentType" className='fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6 inline-block' />
                     {/* <input
                        id="paymentType"
                        name="paymentType"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.paymentType}
                        className='fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6 inline-block'
                     /> */}
                  </div>
                  <div className="field-wrap mb-2 flex flex-wrap items-center">
                     <label htmlFor="category" className="text-12 leading-16 text-formLabel inline-block w-2/6">Category</label>
                     <Select value={cats.filter(obj => obj.value === selectedCat)} isSearchable={false} options={cats} styles={customStyles} onChange={handleCat} name="catgeories" id="catgeories" className='fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6 inline-block' />
                     {/* <input
                        id="category"
                        name="category"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        className="fields text-12 leading-16 text-black font-medium border-b border-border py-1 px-2 w-4/6"
                     /> */}
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