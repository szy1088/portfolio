import React from 'react';
import { sanityClient } from '../../lib/sanity';

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc){title, slug, summary, coverImage}`;
  return await sanityClient.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className="prose mx-auto p-6">
      <h1>Blog</h1>
      <ul>
        {posts.map((p: any) => (
          <li key={p.slug?.current || p.title}>
            <a href={`/blog/${p.slug?.current}`}>{p.title}</a>
            <p>{p.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
