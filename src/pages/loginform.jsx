import axios from 'axios';
import React, { useState } from 'react';
import { baseauth } from '../constant';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [eamil, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginIn, setIsLoginIn] = useState();
  const [errormsg, setErrormsg] = useState('');

  // axios with credentials
  axios.defaults.withCredentials = true;

  // handle login fxn
  const handleLogin = (e) => {
    e.preventDefault();

    // the login main fxn
    setIsLoginIn(true);
    axios
      .post(`${baseauth}/user/login`, {
        eamil,
        password,
      })
      .then((res) => {
        console.log('the login response =>', res);
        setEmail('');
        setPassword('');

        navigate('/');
      })
      .catch((error) => {
        console.log('the login error =>', error);
        if (error instanceof axios.AxiosError) {
          console.log(
            'the register error from axios =>',
            error?.response?.data
          );
          setErrormsg(error?.response?.data?.message);
        }
      })
      .finally(() => setIsLoginIn(false));
  };

  return (
    <div className="max-w-2xl mx-auto py-20">
      <div className="bg-white drop-shadow-md p-5 w-full">
        <h1 className="text-center font-semibold">LogIn Form</h1>
        <form onSubmit={handleLogin} className="space-y-3">
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

          <div className="text-sm font-light text-red-600">{errormsg}</div>
          <button
            type="submit"
            disabled={setIsLoginIn}
            className="bg-gray-300 px-5 py-1 rounded-md font-medium hover:bg-gray-600 transition duration-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
