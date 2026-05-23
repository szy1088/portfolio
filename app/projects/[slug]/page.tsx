import React from 'react';
import { sanityClient } from '../../../lib/sanity';

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  return await sanityClient.fetch(query, { slug });
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) return <main className="prose mx-auto p-6">Project not found</main>;
  return (
    <main className="prose mx-auto p-6">
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      <div>{/* TODO: render body and gallery */}</div>
    </main>
  );
}
