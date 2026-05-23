import React from 'react';
import { sanityClient } from '../../../lib/sanity';

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await sanityClient.fetch(query, { slug });
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return <main className="prose mx-auto p-6">Post not found</main>;
  return (
    <main className="prose mx-auto p-6">
      <h1>{post.title}</h1>
      <p>By {post.author?.name}</p>
      <div>{/* TODO: render rich text body */}</div>
    </main>
  );
}
