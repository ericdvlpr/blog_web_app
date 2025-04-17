import React from "react";
import moment from "moment";
import { useNavigate } from "react-router";



function introPost({ post }) {
  const navigate = useNavigate()
  return (
    <div
      className="grid grid-cols-1
     md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8 cursor-pointer"
     onClick={()=>navigate('blog-detail/'+post.id)}
    >
      <img src={post.img} className="rounded-lg object-cover w-full h-full" />
      <div>
        <h4 className="text-red-500">{post.tag}</h4>
        <h2 className="text-[23px] font-bold mt-5">{post.title}</h2>
        <h4 className="line-clamp-6 text-gray-400 mt-5">{post.desc}</h4>
        <div className="flex items-center mt-5">
          <img src={post.userImg} className="w-[50px] rounded-full" />
          <div className="ml-2">
          <h3 className="font-bold">{post.userName}</h3>
          <h3 className="text-gray-500">
            {moment(post.publish_date).fromNow()}
          </h3>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default introPost;
