import React, { useEffect, useState } from 'react';
import SingleBlogPost from '../pages/single-blog-post';
import { baseapi } from '../constant';

const AllBlog = () => {
  const [postData, setPostData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseapi}/post/all-posts`);
      const fullresponse = response.json();
      console.log("ggggggGG=>", fullresponse);
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log('the posts => ', miles);
        setPostData(miles.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
    <div>
      <h4 className="text-black mb-5">All Blog Posts</h4>
      <div className="w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {postData.slice(0,9)?.map((post) => (
          <SingleBlogPost key={post.id} cohort2post={post} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllBlog;