// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Authpage.css";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import AuthContext from "../../action/AuthContext";


const Signup = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { registerUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);
    registerUser(data)
  };

  const password = watch('password1');

  return (
    <div className="min-h-screen background flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              {...register('email', { required: true })}
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full border-2 rounded-md p-3 focus:outline-none focus:border-indigo-500 transition duration-300"
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              {...register('username', { required: true })}
              type="text"
              id="username"
              placeholder="Username"
              className="w-full border-2 rounded-md p-3 focus:outline-none focus:border-indigo-500 transition duration-300"
            />
            {errors.username && <span className="text-red-500">Username is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              {...register('password1', { required: true })}
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="false"
              className="w-full border-2 rounded-md p-3 focus:outline-none focus:border-indigo-500 transition duration-300"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <input
              {...register('confirmPassword', {
                required: true,
                validate: value => value === password || 'Passwords do not match'
              })}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border-2 rounded-md p-3 focus:outline-none focus:border-indigo-500 transition duration-300"
            />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-md transition duration-300 hover:bg-indigo-600"
          >
            Sign up
          </button>
          <p className='mt-3'>
            Already have an account? <Link to='/login' className='text-indigo-500'>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
