import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Userpage = () => {
    const params = useParams();
  const [post, setPost] = useState();
 

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseapi}/userposts/${params.userId}`
      );
      const fullresponse = response.json();
      console.log("TTTTT=>", fullresponse)
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((west) => {
        console.log("the postt => ", west);
        setPost(west.userposts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
   (
    <div>
    LKN;L
    </div>
  )
}

export default Userpage;