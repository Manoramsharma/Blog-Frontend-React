import React, { useState ,useEffect } from "react";

import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import "./Posts.scss"
import { axiosInstance } from "../../config";
const Post = React.lazy(() => import("../Post/Post"))




const Posts = () => {

    const [loading, setLoading] = useState(true);
    const [loadedBlog, setLoadedBlog] = useState([]);

    useEffect(() => {
        setLoading(true)
        const fetchPost = async () => {
            const res = await axiosInstance.get("blogs")
            console.log(res);
            setLoadedBlog(res.data)
        }
        fetchPost()
        setLoading(false)
    }, [])


        
    console.log(loadedBlog);
            if(loading) {
                return <section className="spinner">
                    <LoadingSpinner />
                </section>
            }

            

    return <div className="posts">
    <h1 className="posts__title">Recent Articles</h1> 
    {loadedBlog.reverse().map(blog => {
       return <Post key={blog._id} id={blog._id} title={blog.name} description={blog.description}/>
    })}
    </div>;
}

export default Posts;