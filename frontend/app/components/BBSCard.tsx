import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '@/components/ui/card'
import Link from 'next/link'

const BBSCard = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>test</CardTitle>
                    <CardDescription>
                        test
                    </CardDescription>
                    <CardAction>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    test
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Link href="/bbs-posts/1" className="text-blue-500">
                        Read More
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default BBSCard
