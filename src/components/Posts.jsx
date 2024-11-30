import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from './PostItem'

const Posts = function () {

    const [posts, setPosts] = useState(DUMMY_POSTS)

    return (
        <section className='posts'>
            <div className="container posts_container">
                {posts.map(function({id, thumbnail, category, title, description, authorID}){
                    return <PostItem key={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} postID={id}/>
                })}
            </div>
        </section>
    )
}

export default Posts
