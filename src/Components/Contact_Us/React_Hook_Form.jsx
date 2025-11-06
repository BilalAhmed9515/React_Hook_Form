import React from "react";
import { useForm, Watch } from "react-hook-form";


const React_Hook_Form = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const SubmitForm = (data) => {
        try {
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <form className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg space-y-6" onSubmit={handleSubmit(SubmitForm)}>
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Contact Form
                </h2>

                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        {...register("name",
                            {
                                required: "Name is strickly Required",
                                minLength: { value: 3, message: "Name should be atleast 3 charecter" },
                                pattern: { value: /^[A-Za-z]+$/i, message: "Name Should be Charecter Only" }
                            })}
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {
                        errors.name && <p className="text-sm text-red-800">{errors.name.message}</p>
                    }
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                    <input
                        type="tel"
                        {...register("phoneNumber",
                            {
                                required: "Phone number is required",
                                pattern: { value: /^\+?[0-9\s-]{10,15}$/, message: "Enter a valid phone number" },
                                min: { value: 10, message: "Phone number should be atleast 10 digits" }
                            })}
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {
                        errors.phoneNumber && <p className="text-sm text-red-800">{errors.phoneNumber.message}</p>
                    }
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: "Enter a valid email address" }
                        })}
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {
                        errors.email && <p className="text-sm text-red-800">{errors.email.message}</p>
                    }
                </div>

                {/* Address */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <input
                        type="text"
                        {...register("address", {
                            required: "Address is required"
                        })}
                        placeholder="Enter your address"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {
                        errors.address && <p className="text-sm text-red-800">{errors.address.message}</p>
                    }
                </div>

                {/* Message */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea
                        rows="4"
                        {...register("message", {
                            required: "Message is required"
                        })}
                        placeholder="Write your message"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {
                        errors.message && <p className="text-sm text-red-800">{errors.message.message}</p>
                    }
                </div>

                {/* Checkboxes */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Select Your Interests
                    </label>
                    <div className="flex flex-col space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                value="Web Development"
                                {...register("interests", {
                                    validate: (value, formValues) =>
                                        formValues.interests && formValues.interests.length > 0 || "Please select at least one interest"
                                })}
                                className="form-checkbox text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">Web Development</span>
                        </label>

                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                value="Mobile Apps"
                                {...register("interests")}
                                className="form-checkbox text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">Mobile Apps</span>
                        </label>

                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                value="UI/UX Design"
                                {...register("interests")}
                                className="form-checkbox text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">UI/UX Design</span>
                        </label>
                    </div>
                    {errors.interests && (
                        <p className="text-sm text-red-800 mt-1">{errors.interests.message}</p>
                    )}
                </div>


                {/* File Upload */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Upload Files
                    </label>
                    <input
                        type="file"
                        {...register("file", {
                            required: "file is required"
                        })}
                        multiple
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    />
                    {
                        errors.file && <p className="text-sm text-red-800">{errors.file.message}</p>
                    }
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default React_Hook_Form;