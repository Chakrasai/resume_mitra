import React, { useRef, useState } from 'react';
import InputFeild from './InputFeild';

function AboutmeInput() {
  const [image,setimage] = useState('/profile.svg')
  const fileInputRef = useRef(null);

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    if(file && file.type.startsWith('image/')){
      const reader = new FileReader();
      reader.onload = () =>{
        setimage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlefileupload = () =>{
    fileInputRef.current.click();
  }


  return (
    <div className="p-4 sm:p-6 rounded-md bg-white space-y-6 max-w-5xl mx-auto w-full" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative group rounded-full w-28 h-28 min-w-[7rem] min-h-[7rem] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt="profile"
            className="rounded-full object-cover w-full h-full"
          />
          <div
            onClick={handlefileupload}
            className="text-white absolute inset-0 bg-opacity-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-70 cursor-pointer transition-opacity"
          >
            <i className="ri-upload-2-line text-white text-2xl"></i>
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <InputFeild type="text" placeholder="Enter your full name" iconClass="ri-user-line" />
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
          <label className="text-sm font-medium text-gray-700">Email ID</label>
          <InputFeild type="email" placeholder="Enter your Email ID" iconClass="ri-mail-line" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Portfolio</label>
          <InputFeild type="email" placeholder="Enter your URL" iconClass="ri-link" />
        </div>

      </div>

      
      <div>
        <label className="text-sm font-medium text-gray-700">Summary</label>
        <textarea
          placeholder="Summary"
          rows={4}
          style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
          className="w-full p-4 border border-[#20B2AA] rounded-lg text-sm shadow-sm outline-none text-[#303030]/90 resize-none"
        />
      </div>
    </div>
  );
}

export default AboutmeInput;
