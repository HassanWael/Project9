import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './Post'
function Posts() {
    const [data,setData] = useState([]);
    useEffect(()=>{
        let data=[];
        axios.get('http://localhost:3001/posts').then((res)=>{
             data=res.data.map((element)=>(
                {id:element.id,
                 user_name:element.user_name,
                 tags:element.tags,
                 description:element.description,
                 created:element.created,
                }
            ))
        }).then(()=>{
            console.log(data)
            setData(data)

        })

    },[])
    return ( 
        <>
        {data.map((ele)=>
  <Post user_name={ele.user_name} created={ele.created} description={ele.description}/> 
        )}
  
        </>
    );
}

export default Posts;