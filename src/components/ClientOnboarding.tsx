'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type ClientFormInputs = {
  name: string;
  email: string;
  spaceType: string;
  size: number;
  budget: number;
  preferences: string;
};

export default function ClientOnboarding() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormInputs>();
  
  const onSubmit: SubmitHandler<ClientFormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to your API
    setIsSubmitted(true);
  };
  
  const spaceTypes = [
    'Living Room',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Office',
    'Outdoor',
    'Other',
  ];
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Client Onboarding</h2>
      
      {isSubmitted ? (
        <div className="bg-green-50 p-4 rounded-md">
          <p className="text-green-800">Thank you for your submission! We'll start working on your project right away.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              CLIENT NAME
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border rounded-md"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded-md"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                }
              })}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="spaceType">
              SPACE TYPE
            </label>
            <select
              id="spaceType"
              className="w-full p-2 border rounded-md"
              {...register('spaceType', { required: 'Space type is required' })}
            >
              <option value="">Select space type</option>
              {spaceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.spaceType && <p className="text-red-500 mt-1">{errors.spaceType.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="size">
              SIZE (sq. ft)
            </label>
            <input
              id="size"
              type="number"
              className="w-full p-2 border rounded-md"
              {...register('size', { 
                required: 'Size is required',
                min: {
                  value: 1,
                  message: 'Size must be greater than 0',
                }
              })}
            />
            {errors.size && <p className="text-red-500 mt-1">{errors.size.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="budget">
              BUDGET
            </label>
            <input
              id="budget"
              type="number"
              className="w-full p-2 border rounded-md"
              {...register('budget', { 
                required: 'Budget is required',
                min: {
                  value: 1,
                  message: 'Budget must be greater than 0',
                }
              })}
            />
            {errors.budget && <p className="text-red-500 mt-1">{errors.budget.message}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="preferences">
              PREFERENCES
            </label>
            <textarea
              id="preferences"
              rows={4}
              className="w-full p-2 border rounded-md"
              {...register('preferences')}
              placeholder="Enter your design preferences, style inspiration, or specific requirements"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
} 