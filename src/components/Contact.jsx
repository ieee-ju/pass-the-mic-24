import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="min-h-screen lg:h-[695px] w-full flex items-center bg-[#171717] text-white justify-center p-4 md:p-0">
      <div className="container lg:max-w-5xl flex flex-col lg:flex-row justify-center lg:items-center w-full">
        <div className="flex flex-col justify-between mb-8 md:mb-0 md:w-full lg:w-[50%] lg:mb-[85px] lg:mr-7">
          <h1 className="text-5xl md:text-7xl font-thin mb-6 text-center lg:text-left">CONTACT US</h1>
          <div className="space-y-7 lg:pl-[50px] lg:mt-5 lg:text-[17px]">
            <div className="flex items-center ">
              <FaPhoneAlt className="mr-2 " />
              <span>+91 8479808755</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-3" />
              <span>jaduniv.ieee@gmail.com</span>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mr-2.5" />
              <span>Jadavpur University<br />188, Raja S.C. Mallick Rd, Jadavpur<br />Kolkata-700032</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-6 lg:pl-[48px]">
            <FaTwitter className="hover:text-gray-500 text-2xl" />
            <FaInstagram className="hover:text-gray-500 text-2xl" />
            <FaDiscord className="hover:text-gray-500 text-2xl" />
          </div>
        </div>
        <div className="md:w-full lg:w-[50%]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-4 bg-transparent border-b border-gray-700 focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-4 bg-transparent border-b border-gray-700 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 bg-transparent border-b border-gray-700 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-4 ml-4">Select Subject</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    onChange={handleChange}
                    className="hidden peer"
                    required
                  />
                  <span className="w-4 h-4 inline-block mr-2 border border-gray-700 rounded-full peer-checked:bg-gray-200"></span>
                  General Inquiry
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    onChange={handleChange}
                    className="hidden peer"
                    required
                  />
                  <span className="w-4 h-4 inline-block mr-2 border border-gray-700 rounded-full peer-checked:bg-gray-200"></span>
                  Feedback
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="subject"
                    value="Support"
                    onChange={handleChange}
                    className="hidden peer"
                    required
                  />
                  <span className="w-4 h-4 inline-block mr-2 border border-gray-700 rounded-full peer-checked:bg-gray-200"></span>
                  Support
                </label>
              </div>
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message.."
                className="w-full p-2 bg-transparent border-b border-gray-700 focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="text-right mt-1">
              <button type="submit" className="px-6 py-2 bg-white text-gray-950 border border-gray-700 rounded hover:bg-gray-700 hover:text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
