import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className=' flex  mt-14 justify-center'>

            
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-5xl font-bold text-center mb-10">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6 mt-5">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">Email</label>
            <input
              type="email"
              {...register("username", { required: true })}
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md border border-gray-700 focus:border-violet-400 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            {errors.username && <span className="text-red-500 text-xs">Email is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">PhotoURL</label>
            <input
              type="text"
              {...register("PhotoUrl", { required: true })}
              id="username"
              placeholder="PhotoUrl"
              className="w-full px-4 py-3 rounded-md border border-gray-700 focus:border-violet-400 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
           {errors.PhotoUrl && <span className="text-red-500 text-xs">Email is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-gray-700 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:border-violet-400"
            />
            {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm bg-violet-600 text-white hover:bg-violet-700"
          >
          Registration
          </button>
        </form>
          
            <div className="flex justify-center space-x-4">
            
                
               
            </div>
            <p className="text-xs text-center sm:px-6">You have an account? please
                <NavLink to="/login" rel="noopener noreferrer" href="#" className="underline  text-red-400"> LogIn</NavLink>
            </p>
        </div>
                </div>
    );
};

export default Register;