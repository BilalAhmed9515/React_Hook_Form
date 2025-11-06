import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact_Us = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    //---------------------- Handle Submit -----------------------//
    const onSubmit = (data) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Contact Us
                </h2>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        {...register("name", { minLength: { value: 3, message: "Min length is 3 character" }, required: "Required", pattern: { value: /^[A-Za-z]+$/i, message: "Name Should be Charecter Only" } })}
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        {...register("phone")}
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>



                <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact_Us;
