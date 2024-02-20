'use client'

import { formSchema } from '../lib/schema/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Header from '@/components/Header'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import Link from 'next/link'

export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (data: formSchema) => {
    console.log(data) // Process your form data here
    toast.success('Your form has been successfully submitted!')
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const notify = () => toast('The Form Submitted Succesfuly')

  return (
    <div className="flex min-h-screen">
      {/* Back arrow */}
      <div className="absolute top-14 right-14 m-4">
        <Link href="/" passHref>
          <div className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition duration-150 ease-in-out">
            <MdOutlineArrowBackIos size="24" />
          </div>
        </Link>
      </div>
      {/* Gradient section */}
      <div className="hidden md:block md:w-1/5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {/* Additional content if needed */}
      </div>

      {/* Form section */}
      <div className="w-full md:w-4/5 bg-white flex justify-center items-center">
        <div className="w-full max-w-md p-4">
          <Header content={'Sign In Form'} className="text-black pb-8" />
          {/* Add your form fields here */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-full justify-center"
            noValidate
          >
            <label
              className="text-left block mb-2 text-base font-medium text-gray-900"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            <p className="text-red-300">{errors.name?.message}</p>
            <label
              className="text-left block mb-2 text-base font-medium text-gray-900"
              htmlFor="surname"
            >
              Surname
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="surname"
              {...register('surname', { required: 'Surname is required' })}
            />
            <p className="text-red-300">{errors.surname?.message}</p>
            <label
              className="text-left block mb-2 text-base font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="email"
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please provide the valid email format',
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue !== 'admin@example.com' ||
                    'Enter a valid email address'
                  )
                },
              })}
            />
            <p className="text-red-300">{errors.email?.message}</p>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-white bg-black px-5 py-2.5 text-center w-full mt-12 h-12 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition ease-in-out delay-150"
                disabled={!isDirty || isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  )
}
