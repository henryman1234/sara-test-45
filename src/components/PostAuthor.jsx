import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../images/avatar2.jpg"

const PostAuthor = function () {
    return(
        <Link to={`/posts/users/sdfsdf`} className="post_author">
            <div className="post_author-avatar">
                <img src={Thumbnail} alt="" />
            </div>
            <div className="post_author-details">
                <h5>Par: Henry Euloge</h5>
                <small>A l'instant</small>
            </div>
        </Link>
    )
}

export default PostAuthor