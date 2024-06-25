import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseapi } from "../constant";

const ThePost = () => {
  const params = useParams();
  const [post, setPost] = useState();
 

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseapi}/post/${params.slug}`
      );
      const fullresponse = response.json();
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the post => ", miles);
        setPost(miles.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  


  return (
    <div>
      <div className="drp-shadow-md mx-56 w-[590px] p-3">
        <img src={post?.post_image} alt="img" />
        <h5 className="mt-5 text-green-500">{post?.title}</h5>
        <p
          className="mt-2 text-gray-600"
          dangerouslySetInnerHTML={{ __html: post?.post_content }}
        />
      </div>
      
    </div>
  );
};

export default ThePost;
