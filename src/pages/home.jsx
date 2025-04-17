import React,{useEffect, useState} from 'react'
import Header from '../components/header'
import Search from '../components/search'
import IntroPost from '../components/introPost'
import Blogs from '../components/blogs'
import Footer from '../components/footer'
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
              img:item.social_image
            }));
           
            setPosts(result)
          })
          
    }
   console.log(post)
  return (
    <div>
        <Header />
        <Search />
       {post.length > 0 ? <IntroPost post={post[0]} />:null} 
        <Blogs />
        <Footer />
    </div>
  )
}

export default home