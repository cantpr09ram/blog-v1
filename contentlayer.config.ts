import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';

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
});
