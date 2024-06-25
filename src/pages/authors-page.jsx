import React, { useEffect, useState } from 'react';
import { baseapi } from '../constant';
import { useParams } from 'react-router-dom';

const Authors = () => {
  const params = useParams();
  const [post, setPost] = useState();

  console.log("the sett post => ", params.authors);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseapi}/post/userposts/${params?.authors}`
      );
      const fullresponse = response.json();
      console.log('the authors fullresponse=>', fullresponse);
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((author) => {
        console.log('the authors posts => ', author?.userdetails);
        setPost(author?.userdetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>Authors</div>
  );
};

export default Authors;
