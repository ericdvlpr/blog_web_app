import React from "react";
import moment from "moment";
import { useNavigate } from "react-router";

function Blogs({ posts }) {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-8">
      {posts?.map((item, index) => {
        return (
          <div key={index} className="m-4 cursor-pointer" onClick={()=>navigate('blog-detail/'+item.id)}>
            <img
              src={item.img}
              className="w-full rounded-2xl object-cover h-[200px]"
            />
            <h3 className="text-red-500 mt-3">{item.tag}</h3>
            <h2 className="font-bold mt-3">{item.title}</h2>
            <h4 className="line-clamp-3 text-gray-400 mt-3">{item.desc}</h4>
            <div className="flex items-center mt-5">
              <img src={item.userImg} className="w-[50px] rounded-full" />
              <div className="ml-2">
                <h3 className="font-bold">{item.userName}</h3>
                <h3 className="text-gray-500">
                  {moment(item.publish_date).fromNow()}
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
