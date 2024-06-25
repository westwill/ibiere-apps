import Advertisement from "./components/adver";
import Hero from "./components/hero";
import { baseapi } from "./constant";
import { useEffect } from "react";
import SecBanner from "./components/secbanner";
import AllBlog from "./components/allblog";
import { Link } from "react-router-dom";
import { useAuthContext } from "./context/auth-context";

const App =()=> {

const { userData } = useAuthContext();
console.log("the validatted user data =>", userData)

  const fetchData = async () => {
    try {
      const response = await fetch(
        
        `${baseapi}/post/all-posts`
      );
      console.log(baseapi)
      const fullresponse = response.json();
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the posts => ", miles);
        setPostData(miles.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mx-auto">
      <Hero />
      <SecBanner />
      <div className="flex justify-center">
        <Advertisement />
      </div>
      <AllBlog />
      <Link to="/blog" className='flex justify-center mt-6'>
        <button className='border border-gray-400 rounded p-1 text-sm font-semibold text-gray-400  hover:bg-gray-500'>View All Post</button>
      </Link>
      <div className="flex justify-center">
        <Advertisement />
      </div>
    </div>
  )
}

export default App;
