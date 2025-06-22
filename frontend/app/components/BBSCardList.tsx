import React from 'react'
import BBSCard from './BBSCard';
import { Post } from '../types/post';

type BBSCardListProps = {
    posts: Post[]
}

const BBSCardList = ({ posts }: BBSCardListProps) => {
    return (
        <>
            {posts.map((post) => (
                <BBSCard key={post.id} post={post} />
            ))}
        </>
    )
}

export default BBSCardList
