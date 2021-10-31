import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './ContactUs.css'

const ContactUs = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.name){
            window.alert('Thank you so much');
            reset()
        } 
    };
    return (
        <div className='flex justify-center contact'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mt-3">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
         Name
      </label>
      <input defaultValue={user?.displayName} {...register("name", { required: true })} className="appearance-none block w-full bg-indigo-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"/>
    </div>

  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input defaultValue={user?.email} {...register("email", { required: true })} className="appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea {...register("message", { required: true })} className=" no-resize appearance-none block w-full bg-indigo-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      {errors.exampleRequired && <span>This field is required</span>}
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <input className="cursor-pointer shadow bg-blue-700 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" />
      </div>
  </div>
</form>
        </div>
    );
};

export default ContactUs;