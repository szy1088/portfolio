export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'coverImage', title: 'Cover image', type: 'image' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] },
  ],
};
