import React,{useEffect, useState} from 'react'
import defaultImg from "./../assets/images/defaultImg.jpg";
import defProfPic from "./../assets/images/user.png";
import Search from '../components/search'
import IntroPost from '../components/introPost'
import Blogs from '../components/blogs'

import GlobalApi from '../services/globalApi'


function home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [post, setPosts] = useState([])

  const [searchItem, setSearchItem] = useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    
      getPost();
    },[searchItem])
    
    const getPost = ()=>{

        GlobalApi.getPost.then(res =>{
          
            const result = res.data.results.map(item=>({
              id: item.id,
              title:item.title,
              desc:item.description,
              tag:item.tags,
              img:item.image_url ==null? defaultImg : item.image_url,
              userImg: defProfPic,
              userName: item.authors[0].name,
              publish_date: item.published_at,
              article_url:item.url
            }));
          
            setPosts(result)
          })
          
    }
   
  
  return (
    <div>
        <Search searchTerm={(term)=>setSearchItem(term)} />
       {post.length > 0 ? <IntroPost post={post[0]} />:null} 
        <Blogs posts={post} />
      
    </div>
  )
}

export default home