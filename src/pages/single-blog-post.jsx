import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'


const SingleBlogPost = ({ cohort2post }) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  console.log("The Users Post =>", cohort2post?.User)

  return (
    <Link to={`/blog/${cohort2post?.slug}`}>
      <div className="border border-gray-200 drop-shadow-md rounded-md p-3">
        <img src={cohort2post?.post_image} alt="img" className='h-60 w-full' />
        <h5 className="text-green-500">{cohort2post?.title}</h5>
        {/* <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: cohort2post?.post_content }}
          style={
            isExpanded
              ? {}
              : {
                  WebkitLineClamp: 9,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }
          }
        /> */}
        {/* <Link to={`/blog/${cohort2post?.slug}`}>
          <button className="text-blue-500">Read More</button>
        </Link> */}
        
        <div className='flex space-x-5 py-3'>
          <Link to={`/authors/${cohort2post?.User?.id}`}
          onClick={(e) => e.stopPropagation()}
          className="text-green-500">
          <img src={cohort2post.User.profile_pic !== "" ? cohort2post.User.profile_pic : "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"} alt="" className='h-6 ' />
          <span className='text-gray-400 text-sm'>{cohort2post.User.name}</span>
          <p className='text-gray-400 text-sm'>{moment(cohort2post.created_at).format("MMMM D YYYY")}</p></Link>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlogPost;
