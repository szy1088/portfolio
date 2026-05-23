import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './schemas';

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Portfolio Studio',
  apiVersion: '2024-05-01',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: schemas },
});
