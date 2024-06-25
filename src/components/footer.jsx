import React from 'react'
import Copyright from "../assets/Blog-img/Copyright Info.svg";
import { FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full mt-16 bg-gray-200">
    <div className="row row py-12 px-14 w-1000px max-w-screen-lg mx-auto flex flex-wrap items-start justify-between">
      <div className="col col flex-basis-1/4">
        <h4 className="font-bold">About</h4>
        <p>
          lorem ipsum dolor sit amet, <br/>consectetur adipscing elit, sed do <br/>
          eiusmod tempor incididunt ut labore <br/> et dolore magna alique. <br /> Ut enim
          ad minim veniam
        </p>
        <br />
        <p><strong>Email</strong>: info@jstemplate.net</p>
        <p><strong>Phone</strong>: 880123456789</p>
      </div>
      <div className="col space-y-4">
        <h3 className="font-bold">Quick LIink</h3>
        <ul className='space-y-2'>
          <li><a href="/">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="">Archived</a></li>
          <li><a href="./singlepost.html">Author</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className="col space-y-4">
        <h3 className="font-bold">Category</h3>
        <ul className='space-y-2'>
          <li><a href="">Lifestyle</a></li>
          <li><a href="">Technology</a></li>
          <li><a href="">Travel</a></li>
          <li><a href="">Business</a></li>
          <li><a href="">Econmy</a></li>
          <li><a href="">Sport</a></li>
        </ul>
      </div>
      <div className="col">
        <form className="bg-white rounded p-12 space-y-2" action="">
          <h3 className="font-bold justify-center">Weekly Newsletter</h3>
          <p>Get blog articles and offers via email</p>
          <div className="weeklysearch">
          <div className="flex items-center border border-gray-300 rounded ">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-1 outline-none"
            />
           <FaEnvelope />
</div>
          </div>
          <button className='bg-blue-600 text-white rounded px-24 py-1'>Subscribe</button>
        </form>
      </div>
    </div>
    <hr className='border-t-2 border-gray-300 row row px-14 w-1000px max-w-screen-lg mx-auto flex flex-wrap items-start' />
    <div className="lastline row row py-8 px-14 w-1000px max-w-screen-lg mx-auto flex flex-wrap items-start justify-between">
      <div className="last-img">
        <a href="">
        <img src={Copyright} alt=""/>
        </a>
      </div>
      <div className="last flex gap-6">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  </footer>
  )
}
export default Footer;