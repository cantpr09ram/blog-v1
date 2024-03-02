import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  // 更新 filePathPattern，從 *.md 改成 *.mdx，
  filePathPattern: `content/posts/**/*.mdx`,
  // 並新增下面這行 contentType
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    socialImage: {
      type: 'string',
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: { 
    rehypePlugins: [rehypeCodeTitles, [rehypePrism, { ignoreMissing: true }]],
   },
});
