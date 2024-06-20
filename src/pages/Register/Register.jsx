import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="flex justify-center items-center">
        <div className="sm:flex shrink-0 w-full h-full max-w-screen-lg shadow-2xl bg-base-100 border border-green-500 overflow-hidden">
          <div className="sm:w-1/3 bg-green-400 h-screen text-white text-center flex flex-col justify-center items-center p-10">
            <h1 className="text-4xl font-bold mb-5">New Here?</h1>
            <p className="text-xl mb-4">
              Sign In and discover a great amount of new opportunities!
            </p>
            <Link to="/Login" className="link">
              <button className="btn bg-white hover:bg-green-400 hover:text-white w-[150px] rounded-full">
                <span style={{ textDecoration: 'none' }}>Sign In</span>
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:w-2/3 justify-center items-center h-screen">
            <h1 className="text-center text-5xl font-bold">
              Register To Your Account
            </h1>
            <form className="w-full sm:px-32 space-y-5 mt-5">
              <div className="form-control text-xl">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="name"
                  className="input rounded-full bg-green-100"
                  // {...register('admin', { required: true })}
                />
                {/* {errors.FullName && (
                  <span className="text-red-500">This field is required</span>
                )} */}
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Photo URL"
                  name="photo"
                  className="input rounded-full bg-green-100"
                  // {...register('photo')}
                />
                {/* {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )} */}
              </div>

              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input rounded-full bg-green-100"
                  // {...register('email', { required: true })}
                />
                {/* {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )} */}
              </div>

              <div className="form-control relative">
                <input
                  // type={showPassword ? 'text' : 'password'}
                  placeholder="Your Password"
                  name="password"
                  className="input rounded-full bg-green-100"
                  // {...register('password', { required: true })}
                />
                {/* {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )} */}

                {/* <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2/3 right-10"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span> */}
              </div>
              <div className="form-control flex items-center mt-6">
                <button
                  type="submit"
                  className="btn bg-green-400 hover:bg-white text-white hover:text-black w-[150px] rounded-full"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
