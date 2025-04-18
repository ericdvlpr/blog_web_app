import React,{useEffect, useState} from 'react'

import Search from '../components/search'
import IntroPost from '../components/introPost'
import Blogs from '../components/blogs'

import GlobalApi from '../services/globalApi'


function home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [post, setPosts] = useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
      getPost();
    },[])
    
    const getPost = ()=>{
      
          GlobalApi.getPost.then(res =>{
            
            const result = res.data.map(item=>({
              id: item.id,
              title:item.title,
              desc:item.description,
              tag:item.tags,
              img:item.cover_image,
              userImg: item.user.profile_image_90,
              userName: item.user.username,
              publish_date: item.published_at
            }));
           
            setPosts(result)
          })
          
    }
  return (
    <div>
        <Search selectTag={(tag)=>console.log(tag)} />
       {post.length > 0 ? <IntroPost post={post[0]} />:null} 
        <Blogs posts={post} />
      
    </div>
  )
}

export default home