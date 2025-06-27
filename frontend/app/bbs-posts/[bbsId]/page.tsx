import { Post } from '@/app/types/post';
import React from 'react'
import { notFound } from "next/navigation";

async function getBBSDetailData(id: string) {
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: "no-store", // キャッシュを無効化つまり、SSRで取得する
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }

    const text = await response.text();
    if (!text) {
      throw new Error('No data returned from API');
    }

    const BBSDetailData: Post = JSON.parse(text);
    return BBSDetailData;
  }

const BBSDetailPage = async ({ params }: { params: Promise<{ bbsId: string }> }) => {
    let BBSDetailData;
    try {
        const { bbsId } = await params;
        BBSDetailData = await getBBSDetailData(bbsId);
    } catch {
        notFound();
    }
    const { title, content, username } = BBSDetailData;

  return (
    <>
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-gray-600">
            <span className="mr-4">
              <i className="fas fa-user mr-2"></i>
              {username}
            </span>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {content}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default BBSDetailPage;
