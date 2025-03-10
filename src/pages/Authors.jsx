
import React, { useState } from "react";

import Avatar1 from "../images/avatar1.jpg"
import Avatar2 from "../images/avatar2.jpg"
import Avatar3 from "../images/avatar3.jpg"
import Avatar4 from "../images/avatar4.jpg"
import Avatar6 from "../images/avatar6.jpg"
import Avatar5 from "../images/avatar5.jpg"
import { Link } from "react-router-dom";


const authorsData = [
    {id: 1, avatar: Avatar1, name: "Mealle", posts: 3},
    {id: 2, avatar: Avatar2, name: "Henry Euloge", posts: 5},
    {id: 3, avatar: Avatar3, name: "Evelyne", posts: 0},
    {id: 4, avatar: Avatar4, name: "Kessy Emma", posts: 2},
    {id: 5, avatar: Avatar5, name: "Sara Lambert", posts: 1},
    {id: 6, avatar: Avatar6, name: "Christophe", posts: 2}
]


const Authors = function () {

    const [authors, setAuthors] = useState(authorsData)

    return (
        <section className="authors">
            {authorsData.length > 0 ? <div className="container authors_container">
                {authors.map(function({id, avatar, name, posts}){
                    return <Link key={id} to={`/posts/users/${id}`} className="author">
                        <div className="author_avatar">
                            <img src={avatar} alt={`Image of ${name}`} />
                        </div>
                        <div className="author-info">
                            <h4>{name}</h4>
                            <p>{posts} poste(s)</p>
                        </div>
                    </Link>
                })}
            </div>: <h2 className="author-not-found">Pas d'utilisateurs ou d'auteurs trouvés</h2>}
        </section>
    )
}

export default Authors