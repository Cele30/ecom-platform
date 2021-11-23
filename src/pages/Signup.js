import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { firebase } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getFirestore, addDoc, collection, Timestamp } from 'firebase/firestore'

function Signup() {
  const initialValues = { username: '', fullName: '', email: '', password: '' }
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { target } = event

    setValues(prevValues => ({
      ...prevValues,
      [target.name]: target.value
    }))
  }

  const handleSignup = async (event) => {
    event.preventDefault()

    try {
      const db = getFirestore(firebase)
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)

      updateProfile(userCredential.user, {
        displayName: values.fullName
      })

      await addDoc(collection(db, 'users'), {
        userId: userCredential.user.uid,
        email: userCredential.user.email,
        username: values.username,
        fullName: values.fullName,
        dateCreated: Timestamp.fromDate(new Date())
      })

      navigate('/')
    } catch (error) {
      setValues(initialValues)
      setError(error.message)
    }

  }

  return (
    <div className='container mx-auto px-4'>
      <div className='py-16 md:py-20 lg-py-24 sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5  mx-auto'>
        <form className='border border-gray-200 rounded shadow py-8 px-10'>
          <label className='block pb-3'>Username</label>
          <input type='text'
            placeholder='Enter your username'
            className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded'
            name='username'
            value={values.username}
            onChange={handleChange} />

          <label className='block pb-3'>Full name</label>
          <input type='text'
            placeholder='Enter your full name'
            className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded'
            name='fullName'
            value={values.fullName}
            onChange={handleChange} />

          <label className='block pb-3'>Email</label>
          <input type='email'
            placeholder='Enter your email'
            className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded'
            name='email'
            value={values.email}
            onChange={handleChange} />

          <label className='block pb-3'>Password</label>
          <input type='password'
            placeholder='Enter your password'
            className='mb-6 border border-1 border-gray-300 px-3 py-3 w-full rounded'
            name='password'
            value={values.password}
            onChange={handleChange} />

          {error && <p className='text-red-500 text-sm text-center pb-2'>{error}</p>}

          <button type='submit'
            className='w-full bg-yellow-500 text-white px-7 py-3 rounded inline-block uppercase text-center font-semibold tracking-wide'
            onClick={handleSignup}>
            Login
          </button>

          <div className='flex flex-col justify-center items-center w-full p-4'>
            <p className='text-md'>Have an account?
              <Link to={'/login'} className='font-bold text-yellow-500'> Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup