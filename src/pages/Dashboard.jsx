import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import { Link } from "react-router-dom";

const Dashboard = function () {

    const [posts, setPosts] = useState(DUMMY_POSTS)

    return (
        <section className="dashboard">
            {posts.length > 0 ? <div className="container dashboard_container">
                {posts.map(function(post){
                    return <article key={post.id} className="dashboard_post">
                        <div className="dashboard_post-info">
                            <div className="dashboard_post-thumbnail">
                                <img src={post.thumbnail} alt="" />
                            </div>
                            <h5>{post.title}</h5>
                        </div>
                        <div className="dashboard_post-actions">
                            <Link to={`/posts/${post.id}`} className="wiew-post">Regarder</Link>
                            <Link to={`/posts/${post.id}/edit`} className="edit-button">Modifier</Link>
                            <Link to={`/posts/${post.id}/delete`} className="delete-button">Supprimer</Link>
                        </div>

                    </article>
                })}
            </div>: <h2 className="dashboard-h2">Vous n'avez pas encore de postes!</h2>}
        </section>
    )
}

export default Dashboard