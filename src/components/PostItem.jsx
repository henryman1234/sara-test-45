import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";


const PostItem = function ({id, thumbnail, category, title, description, authorID, postID}) {

    const shortDescription = description.length > 100 ? description.substr(0, 100)+ "..." : description

    const shortTitle = title.length > 30 ? title.substr(0,30)+"...": title

    return (
        <article className="post">
            <div className="post_thumbnail">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="post_content">
                <Link to={`/posts/${postID}`}>
                    <h3>{title}</h3>
                </Link>
                <p>{description}</p>
            </div>
            <div className="post_footer">
                <PostAuthor/>
                <Link to={`/posts/categories/${category}`} className="post_author-category">{category}</Link>
            </div>
        </article>
    )
}

export default PostItem