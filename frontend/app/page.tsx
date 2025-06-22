import BBSCardList from "./components/BBSCardList";
import { Post } from "./types/post";

async function getBBSAllPosts() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store", // キャッシュを無効化つまり、SSRで取得する
  });
  const BBSAllPosts: Post[] = await response.json();
  return BBSAllPosts;
}

export default async function Home() {
  const BBSAllPosts = await getBBSAllPosts();

  return (
    <>
      <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
        <BBSCardList posts={BBSAllPosts} />
      </main>
    </>
  );
}
