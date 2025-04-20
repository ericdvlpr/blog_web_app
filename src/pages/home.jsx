import React,{useEffect, useState} from 'react'

import Search from '../components/search'
import IntroPost from '../components/introPost'
import Blogs from '../components/blogs'

import GlobalApi from '../services/globalApi'


function home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [post, setPosts] = useState([])
  const [filterPost, setFilterPost] = useState([])
  const [searchItem, setSearchItem] = useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
      getPost();
      searchPost()
    },[searchItem])
    
    const getPost = ()=>{
        let url
        GlobalApi.getPost.then(res =>{
            console.log(res.data.results)
            const result = res.data.results.map(item=>({
              id: item.id,
              title:item.title,
              desc:item.description,
              tag:item.tags,
              img:item.image_url,
              userImg: item.user.profile_image_90,
              userName: item.user.username,
              publish_date: item.published_at
            }));
            setFilterPost(result)
            setPosts(result)
          })
          
    }
    const searchPost = ()=>{
      console.log(filterPost)
      const filteredPost = filterPost.filter(item=>item.title===searchItem)
      console.log(filteredPost)
      setPosts(filteredPost)
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