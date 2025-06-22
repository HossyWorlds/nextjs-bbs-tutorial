import { PrismaClient } from './lib/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // 既存のデータを削除
  await prisma.post.deleteMany();

  // テストデータを追加
  const posts = await prisma.post.createMany({
    data: [
      {
        username: 'user1',
        title: '初回投稿です',
        content: 'これは初回の投稿内容です。BBSシステムが正常に動作していることを確認できます。',
      },
      {
        username: 'user2',
        title: '質問があります',
        content: 'Next.jsとPrismaを使った開発について質問があります。データベースの接続がうまくいかない場合の対処法を教えてください。',
      },
      {
        username: 'user3',
        title: '共有したい情報',
        content: 'TypeScriptを使った開発で便利なTipsを共有します。型安全性を保ちながら効率的に開発する方法について書きました。',
      },
    ],
  });

  console.log('シードデータが正常に追加されました:', posts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
