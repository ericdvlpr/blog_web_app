import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import globalApi from '../services/globalApi';
import moment from "moment";
import parse from 'html-react-parser';


function blogDetails() {
    const {id} = useParams();
    const [post,setPost] = useState([]);
    useEffect(()=>{
      
        getBlogById()
    },[])

    const getBlogById=()=>{
        globalApi.getPostById(id).then(res =>{
            console.log(res.data)
            const result ={
                id: res.data.id,
                title:res.data.title,
                desc:parse(res.data.body_html),
                tag:res.data.tags,
                img:res.data.cover_image,
                userImg: res.data.user.profile_image_90,
                userName: res.data.user.username,
                publish_date: res.data.published_at
              };
            setPost(result)
        })
    }
  return (
    <div
         className="px-6 md:px-20 lg:px-36 mt-10"
       >
        <h4 className="text-gray-500 text-[16px]">{post.tag}</h4>
        <h2 className="text-[26px] font-bold mt-5">{post.title}</h2>
        <div className="flex items-center mt-5">
             <img src={post.userImg} className="w-[50px] rounded-full" />
                <div className="ml-2">
                    <h3 className="font-bold">{post.userName}</h3>
                    <h3 className="text-gray-500">
                    {moment(post.publish_date).fromNow()}
                    </h3>
                </div>
           </div>
         <img src={post.img} className="rounded-2xl mt-5 mb-5" />
         <div>
           
           <h4 className=" mt-5 leading-9">{ post.desc}</h4>
          
           
         </div>
       </div>
        
  )
}

export default blogDetails