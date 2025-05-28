import React from 'react';
import InputFeild from './InputFeild'; 

function AboutmeInput() {
  return (
    <div className="p-6 rounded-md bg-white space-y-6 max-w-3xl mx-auto">
        <div className='flex flex-col md:flex-row items-start gap-6 justify-between'>
            <div className="flex flex-col items-center">
                <img
                    src="/user-fill.png"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mb-2"
                />
                <button className="border border-[#20B2AA] text-[#20B2AA] px-4 py-1 rounded-lg text-sm hover:bg-[#20B2AA]/10">
                Add a photo
                </button>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <InputFeild type="text" placeholder="Enter your first name" iconClass="ri-user-line" />
                <InputFeild type="text" placeholder="Enter your last name" iconClass="ri-user-line" />
            </div>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputFeild type="text" placeholder="Enter your City name" iconClass="ri-map-pin-line" />
        <InputFeild type="text" placeholder="Enter your Phone number" iconClass="ri-phone-line" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputFeild type="email" placeholder="Enter your LinkedIn ID" iconClass="ri-linkedin-box-line" />
        <InputFeild type="email" placeholder="Enter your Email ID" iconClass="ri-mail-line" />
      </div>

      <div>
        <textarea
          placeholder="Summary"
          rows={4}
          className="w-full p-4 border border-[#20B2AA] rounded-lg text-sm card-shadow outline-none text-[#303030]/90"
        />
      </div>
    </div>
  );
}

export default AboutmeInput;
