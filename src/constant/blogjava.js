export const [postData, setPostData] = useState([]);
const fetchData = async () => {
  try {
    const response = await fetch(`${baseapi}/post/all-posts`);
    const fullresponse = response.json();
    // console.log("ggggggGG=>", fullresponse);
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