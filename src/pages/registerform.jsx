import React, { useState } from 'react';
import axios from 'axios';
import { baseauth } from '../constant';
import { useNavigate } from 'react-router-dom';

const Registerform = () => {
  const navigate = useNavigate;
  // creatinf state
  const [name, setName] = useState('');
  const [eamil, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registring, setRegistring] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  // handle registration fxn
  const handleRegistration = (e) => {
    e.preventDefault();
    // const regDetails = {
    //   name,
    //   eamil,
    //   bio,
    //   password,
    //   confirmPassword,
    // };
    // console.log('the reg details =>', regDetails);

    // the register main fxn
    setRegistring(true);
    // check if the password match
    if (password !== confirmPassword) {
      console.log('Password dont match');
      setRegistring(false);
      return;
    }
    axios
      .post(`${baseauth}/user/create`, {
        name,
        bio,
        eamil,
        password,
      })
      .then((res) => {
        console.log('the login response =>', res);
        setName('');
        setEmail('');
        setBio('');
        setPassword('');
        setConfirmPassword('');


        navigate('/login');
      })
      .catch((error) => {
        console.log('the register error =>', error);
        if (error instanceof axios.AxiosError) {
          console.log(
            'the register error from axios =>',
            error?.response?.data
          );
          setErrormsg(error?.response?.data?.message);
        }
      })
      .finally(() => setRegistring(false));
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className="bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">Register Form</h1>
        <form onSubmit={handleRegistration} className="space-y-3">
          {/* the name field */}
          <div className="flex flex-col space-y-1">
            <label>Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

          {/* email field */}
          <div className="flex flex-col space-y-1">
            <label>Email</label>
            <input
              type="email"
              required
              value={eamil}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

          {/* the bio part */}
          <div className="flex flex-col space-y-1">
            <label>Bio</label>
            <input
              type="text"
              required
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

          {/* the password part */}
          <div className="flex flex-col space-y-1">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>

          {/* confirm password */}
          <div className="flex flex-col space-y-1">
            <label>Confirm Password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
            />
          </div>
          <div className="text-sm font-light text-red-600">{errormsg}</div>
          <button
            type="submit"
            disabled={registring}
            className="bg-gray-300 px-5 py-1 rounded-md font-medium hover:bg-gray-600 transition duration-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
