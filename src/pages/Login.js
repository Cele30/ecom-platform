import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [values, setValues] = useState({
    email: 'test@test.com',
    password: 'test123',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChange = event => {
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignIn = async event => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, values.email, values.password);

      if (state?.from === '/cart') {
        navigate('/cart/checkout');
      } else {
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-16 md:py-20 lg-py-24 sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5  mx-auto">
        <form className="border border-gray-200 rounded shadow py-8 px-10">
          <label className="block pb-3">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded"
          />

          <label className="block pb-3">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded"
          />

          {error && (
            <p className="text-red-500 text-sm text-center pb-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white px-7 py-3 rounded inline-block uppercase text-center font-semibold tracking-wide"
            onClick={handleSignIn}
          >
            Login
          </button>

          <div className="flex flex-col justify-center items-center w-full p-4">
            <p className="text-md">
              Don't have an account?
              <Link to="/signup" className="font-bold text-yellow-500">
                {' '}
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
