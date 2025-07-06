"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// shadcn/uiのUIコンポーネントを仮想パスでimport（必要に応じてパス修正）
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createPost } from "@/app/actions/createPost";

const formSchema = z.object({
  title: z.string().min(1, { message: "タイトルは必須です" }),
  username: z.string().min(1, { message: "ユーザー名は必須です" }),
  content: z.string().min(1, { message: "本文は必須です" }),
});

type FormValues = z.infer<typeof formSchema>;

const CreatePostPage = () => {
//   const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", username: "", content: "" },
  });

  // TODO: server actionで実装する（このコメントアウトは消さない）
//   const onSubmit = async (values: FormValues) => {
    // try {
    //   const res = await fetch("/api/post", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(values),
    //   });
    //   if (!res.ok) {
    //     throw new Error("投稿に失敗しました");
    //   }
    //   router.push("/");
    // } catch (err: unknown) {
    //   if (typeof err === "string") {
    //     form.setError("root", { message: err });
    //   } else if (err instanceof Error) {
    //     form.setError("root", { message: err.message });
    //   } else {
    //     form.setError("root", { message: "エラーが発生しました" });
    //   }
    // }
//   };

  const onSubmit = async (values: FormValues) => {
    await createPost(values);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">新規投稿作成</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-lg shadow-lg p-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル</FormLabel>
                <FormControl>
                  <Input placeholder="タイトル" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ユーザー名</FormLabel>
                <FormControl>
                  <Input placeholder="ユーザー名" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>本文</FormLabel>
                <FormControl>
                  <Textarea placeholder="本文" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.formState.errors.root && (
            <div className="text-red-500">{form.formState.errors.root.message}</div>
          )}
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "投稿中..." : "投稿する"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreatePostPage; 
