import React, { useRef, useState, useEffect } from 'react';
import InputFeild from './InputFeild';

function AboutmeInput() {
  const [image, setImage] = useState('/profile.svg');
  const fileInputRef = useRef(null);

  const [candidate, setCandidate] = useState({
    name: '',
    designation: '',
    profile_image: null,
    city: '',
    email: '',
    phone: '',
    portfolio_url: '',
    summary: '',
  });

  // 🟢 Handle file upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setCandidate(prev => ({ ...prev, profile_image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  // ✅ Fetch data and set state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://itn-dev-rm-be-35683800078.us-west1.run.app/121/13'); // Replace with your API URL
        const data = await res.json();

        const candidateData = data.candidate;
        const summary = data.introduction?.introduction || '';

        setCandidate({
          name: candidateData.name || '',
          designation: candidateData.designation || '',
          profile_image: candidateData.profile_image,
          city: candidateData.address || '',
          email: candidateData.email || '',
          phone: candidateData.phone || '',
          portfolio_url: candidateData.protfolio_url || '',
          summary: summary,
        });

        if (candidateData.profile_image) {
          setImage(candidateData.profile_image);
        }

      } catch (error) {
        console.error('Error fetching resume data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-6 rounded-md bg-white space-y-6 max-w-5xl mx-auto w-full" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      
      {/* Profile Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative group rounded-full w-28 h-28 min-w-[7rem] min-h-[7rem] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt="profile"
            className="rounded-full object-cover w-full h-full"
          />
          <div
            onClick={handleFileUpload}
            className="text-white absolute inset-0 bg-opacity-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-70 cursor-pointer transition-opacity"
          >
            <i className="ri-upload-2-line text-white text-2xl"></i>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <InputFeild
              type="text"
              placeholder="Enter your full name"
              iconClass="ri-user-line"
              value={candidate.name}
              onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* City and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">City</label>
          <InputFeild
            type="text"
            placeholder="Enter your City name"
            iconClass="ri-map-pin-line"
            value={candidate.city}
            onChange={(e) => setCandidate({ ...candidate, city: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <InputFeild
            type="text"
            placeholder="Enter your Phone number"
            iconClass="ri-phone-line"
            value={candidate.phone}
            onChange={(e) => setCandidate({ ...candidate, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Email and Portfolio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email ID</label>
          <InputFeild
            type="email"
            placeholder="Enter your Email ID"
            iconClass="ri-mail-line"
            value={candidate.email}
            onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Portfolio</label>
          <InputFeild
            type="url"
            placeholder="Enter your URL"
            iconClass="ri-link"
            value={candidate.portfolio_url}
            onChange={(e) => setCandidate({ ...candidate, portfolio_url: e.target.value })}
          />
        </div>
      </div>

      {/* Summary */}
      <div>
        <label className="text-sm font-medium text-gray-700">Summary</label>
        <textarea
          placeholder="Summary"
          rows={4}
          value={candidate.summary}
          onChange={(e) => setCandidate({ ...candidate, summary: e.target.value })}
          style={{ boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)" }}
          className="w-full p-4 border border-[#20B2AA] rounded-lg text-sm shadow-sm outline-none text-[#303030]/90 resize-none"
        />
      </div>
    </div>
  );
}

export default AboutmeInput;
