import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const formdetails = {
    name,
    email,
    subject,
    message,
  };
  const handleSubmit = () => {
    console.log('the form details =>', formdetails);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="py-20 px-10 grid grid-col-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div className="text-center">
        <h1 className="relative inline uppercase font-bold text-[24px]">
          Contact
          <span className="absolute left-1/2 bg-gray-500 -bottom-2 -translate-x-1/2 h-[1px] w-[60px]"></span>
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label>Your Name (required)</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 outline-none border border-grey-300 focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label>Your Email (required)</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 outline-none border border-white rounded-md focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-2 outline-none border border-white focus:border-gray-200"
          />
        </div>
        <div className="flex flex-col">
          <label>Your Message</label>
          <textarea
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            col="10"
            rows="10"
            className="resize-none border border-white focus:border-gray-200 outline-none p-2"
          ></textarea>
        </div>
        <button
          className="bg-gray-700 text-white hover:bg-teal-600 hover:text-black uppercase duration-300 rounded-full p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
