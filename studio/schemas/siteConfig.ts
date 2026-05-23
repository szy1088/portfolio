export default {
  name: 'siteConfig',
  title: 'Site config',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'openGraphImage', title: 'Open Graph Image', type: 'image' },
  ],
};
