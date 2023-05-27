import { Link } from "react-router-dom"

import "./Post.scss"

const SinglePost = (props) => {
    console.log(props.image);
    return (
        <div className="singlepost">
            <img src={props.image} alt="" className="singlepost__image" />
            <div className="singlepost__info">
                
                <Link className="singlepost__title" to={`/home/post/${props.id}`}>{props.title}</Link>
                
                <div className="singlepost__date">{props.description}</div>
            </div>
        </div>
    )
}

export default SinglePost;