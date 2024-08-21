import { notFound } from 'next/navigation';
import { posts } from '../../../data/posts';

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
