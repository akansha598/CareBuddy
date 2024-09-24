import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col items-center p-5 bg-gray-100 min-h-screen">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">Contact Us</h2>
                <form>
                    {/* Email input */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="name@example.com"
                        />
                    </div>

                    {/* Query Selection */}
                    <div className="mb-5">
                        <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">Select Your Query</label>
                        <select
                            id="query"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option>Select from here</option>
                            <option>1. Can't find my state</option>
                            <option>2. Can't find my city</option>
                            <option>3. The data is inappropriate</option>
                            <option>4. Can't login or sign-up</option>
                        </select>
                    </div>

                    {/* Textarea */}
                    <div className="mb-5">
                        <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">Elaborate Your Concern</label>
                        <textarea
                            id="concern"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
