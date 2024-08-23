import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../FirebaseAuth/Firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location = useLocation();
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const from = location?.state || '/';
   
   
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const onSubmit = (data) => {
        const { email, password } = data;
    
        // Password validation: check if password is at least 6 characters long
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            toast.error("Password must be at least 6 characters long");
            return;
        }
    
        // Password validation: check if password contains both uppercase and lowercase letters
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
    
        if (!hasUppercase || !hasLowercase) {
            setError("Password must contain both uppercase and lowercase letters");
            toast.error("Password must contain both uppercase and lowercase letters");
            return;
        }
    
        setError('');  // Reset error when submitting the form
        setSuccess(''); // Reset success message when submitting the form
    
        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("User created successfully");
                toast.success("User created successfully");
                navigate(from)
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error("Registration failed: " + error.message);
            });
    };

    return (
        <div className='flex mt-14 justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl border dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-5xl font-bold text-center mb-10">Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6 mt-5">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            id="email"
                            name='email'
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md border border-gray-700 focus:border-violet-400 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                        {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block dark:text-gray-600">Photo URL</label>
                        <input
                            type="text"
                            {...register("photoURL", { required: true })}  
                            id="photoURL"
                            name='photoURL'
                            placeholder="Photo URL"
                            className="w-full px-4 py-3 rounded-md border border-gray-700 focus:border-violet-400 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                        />
                        {errors.photoURL && <span className="text-red-500 text-xs">PhotoURL is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            id="password"
                            placeholder="Password"
                            name='password'
                            className="w-full px-4 py-3 rounded-md border border-gray-700 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:border-violet-400"
                        />
                        {errors.password && <span className="text-red-700 text-xs">Password is required</span>}
                    </div>
                    <button
                        type="submit"
                        className="block w-full p-3 text-center rounded-sm bg-violet-600 text-white hover:bg-violet-700"
                    >
                        Registration
                    </button>
                </form>
                {success && <p className='text-green-600'>{success}</p>}
                {error && <p className='text-red-600'>{error}</p>}
                <ToastContainer/>
                <p className="text-xs text-center sm:px-6">You have an account? Please
                    <NavLink to="/login" rel="noopener noreferrer" className="underline text-red-400"> LogIn</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
