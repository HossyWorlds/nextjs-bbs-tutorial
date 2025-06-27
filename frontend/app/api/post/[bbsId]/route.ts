import { prisma } from "@/lib/prismaClient";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ bbsId: string }> }
) {
    const { bbsId } = await params;
    const bbsIdNum = parseInt(bbsId, 10);
    if (isNaN(bbsIdNum)) {
        return new NextResponse(JSON.stringify({ message: "Invalid ID" }), { status: 404 });
    }

    try {
        const BBSDetailData = await prisma.post.findUnique({
            where: { id: bbsIdNum }
        });

        if (!BBSDetailData) {
            return new NextResponse(JSON.stringify({ message: "Not Found" }), { status: 404 });
        }

        return NextResponse.json(BBSDetailData);
    } catch {
        return new NextResponse(JSON.stringify({ message: "Server Error" }), { status: 500 });
    }
}
