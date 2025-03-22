import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full m-0 px-4 md:px-0 bg-indigo-50 dark:bg-gray-900 text-gray-800 dark:text-white"
      id="contact"
    >
      <div className="pt-8 pb-0 md:py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-300">
          Have questions or feedback? Reach out to us!
        </p>
        <div className="flex justify-center">
          <form className="max-w-md sm:mb-0 w-full">
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border rounded w-full py-2 px-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-400 dark:border-gray-600"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded w-full py-2 px-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-400 dark:border-gray-600"
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-700 dark:text-gray-300"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="border rounded w-full py-2 px-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-400 dark:border-gray-600"
                id="message"
                rows="5"
                placeholder="Your Message"
              />
            </div>
            <button
              className="w-full mb-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
