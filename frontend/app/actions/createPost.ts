"use server";
import { prisma } from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "タイトルは必須です" }),
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  content: z.string().min(1, { message: "本文は必須です" }),
});

export async function createPost(values: unknown) {
  const parsed = formSchema.safeParse(values);
  if (!parsed.success) {
    return { error: parsed.error.errors[0]?.message || "バリデーションエラー" };
  }
  try {
    await prisma.post.create({
      data: parsed.data,
    });
  } catch {
    return { error: "サーバーエラーが発生しました" };
  }
  revalidatePath("/");
  redirect("/");
} 
