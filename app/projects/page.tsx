import React from 'react';
import { sanityClient } from '../../lib/sanity';

async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc){title, slug, summary, coverImage}`;
  return await sanityClient.fetch(query);
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="prose mx-auto p-6">
      <h1>Projects</h1>
      <ul>
        {projects.map((p: any) => (
          <li key={p.slug?.current || p.title}>
            <a href={`/projects/${p.slug?.current}`}>{p.title}</a>
            <p>{p.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
