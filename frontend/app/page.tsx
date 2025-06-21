import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardAction } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
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
      </main>
    </>
  );
}
