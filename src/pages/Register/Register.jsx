import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User created successfully.',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/');
          })
          .catch(error => console.error('Profile update error:', error));
      })
      .catch(error => console.error('Create user error:', error));
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full sm:px-32 space-y-5 mt-5"
            >
              <div className="form-control text-xl">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input rounded-full bg-green-100"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Photo URL"
                  className="input rounded-full bg-green-100"
                  {...register('photoURL')}
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input rounded-full bg-green-100"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input rounded-full bg-green-100"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-500">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-500">
                    Password must have one uppercase, one lowercase, one number,
                    and one special character
                  </p>
                )}
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
