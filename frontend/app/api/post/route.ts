import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// TODO: ページが増えてきたら、ページネーションを実装する
export async function GET() {
    const allBBSPost = await prisma.post.findMany();
    return NextResponse.json(allBBSPost);
}
