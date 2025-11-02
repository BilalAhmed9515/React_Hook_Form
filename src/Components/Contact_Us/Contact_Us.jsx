import React, { useState } from 'react';
import * as Yup from "yup"

const validateSchema = Yup.object({
    name: Yup.string()
        .required("name is require")
        .min(3, "Minumum length is 3 characters")
        .matches(/^[A-Za-z\s]+$/, "Charter only"),

    email: Yup.string()
        .required("Email Required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
})



const Contact_Us = () => {
    const [formData, setFormData] = useState({})
    const handlechange = (e) => {
        const { value, name, type, checked, files } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handlesubmit = async (e) => {
        try {
            e.preventDefault()
            await validateSchema.validate(formData)
            console.log(formData);
        } catch (error) {
            console.log(error.errors);
            
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
                        onChange={handlechange}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        onChange={handlechange}
                        type="email"
                        name="email"
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
                        placeholder="Enter your phone number"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    onClick={handlesubmit}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact_Us;
