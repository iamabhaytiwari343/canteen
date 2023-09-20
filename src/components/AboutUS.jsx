import React from 'react';
import img from '../img/messmanager.png';
import img1 from '../img/canteen.jfif';


const AboutUS = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg p-4 bg-white rounded-md shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-[#07074D]">Contact Us</h2>
        </div>
        <form  >
          <div className="mb-4">
            <label htmlFor="name" className="block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-base font-medium text-[#07074D]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-base font-medium text-[#07074D]">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-4 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUS;
