import React from 'react';
import InputFeild from './InputFeild';

function AboutmeInput() {
  return (
    <div className="p-4 sm:p-6 rounded-md bg-white space-y-6 max-w-5xl mx-auto w-full">
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex flex-col items-center">
          <img
            src="/user-fill.png"
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-2"
          />
          <button className="border border-[#20B2AA] text-[#20B2AA] px-4 py-1 rounded-lg text-sm hover:bg-[#20B2AA]/10 transition">
            Add a photo
          </button>
        </div>

        
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <InputFeild type="text" placeholder="Enter your first name" iconClass="ri-user-line" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <InputFeild type="text" placeholder="Enter your last name" iconClass="ri-user-line" />
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">City</label>
          <InputFeild type="text" placeholder="Enter your City name" iconClass="ri-map-pin-line" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <InputFeild type="text" placeholder="Enter your Phone number" iconClass="ri-phone-line" />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">LinkedIn ID</label>
          <InputFeild type="email" placeholder="Enter your LinkedIn ID" iconClass="ri-linkedin-box-line" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Email ID</label>
          <InputFeild type="email" placeholder="Enter your Email ID" iconClass="ri-mail-line" />
        </div>
      </div>

      
      <div>
        <label className="text-sm font-medium text-gray-700">Summary</label>
        <textarea
          placeholder="Summary"
          rows={4}
          className="w-full p-4 border border-[#20B2AA] rounded-lg text-sm shadow-sm outline-none text-[#303030]/90 resize-none"
        />
      </div>
    </div>
  );
}

export default AboutmeInput;
