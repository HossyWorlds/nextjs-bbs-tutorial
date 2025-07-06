import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// TODO: ページが増えてきたら、ページネーションを実装する
export async function GET() {
    const allBBSPost = await prisma.post.findMany();
    return NextResponse.json(allBBSPost);
}

export async function POST(req: Request) {
    try {
        const { title, username, content } = await req.json();
        if (!title || !username || !content) {
            return new NextResponse(JSON.stringify({ message: "Missing fields" }), { status: 400 });
        }
        const newPost = await prisma.post.create({
            data: { title, username, content },
        });
        return NextResponse.json(newPost, { status: 201 });
    } catch {
        return new NextResponse(JSON.stringify({ message: "Server Error" }), { status: 500 });
    }
}
