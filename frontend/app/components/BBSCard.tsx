import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { Post } from '../types/post'

// TODO: 抽象度の塩梅がわからない。
type BBSCardProps = {
  post: Post;
}

const BBSCard = ({ post }: BBSCardProps) => {
    // TODO: 分割代入を行う
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                        By: {post.username}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {post.content}
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Link href={`/bbs-posts/${post.id}`} className="text-blue-500">
                        Read More
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default BBSCard
