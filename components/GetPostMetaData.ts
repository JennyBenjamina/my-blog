import { PostMetadata } from './PostMetadata';
import fs from 'fs';
import matter from 'gray-matter';

const getPostMeta = (): PostMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date.toString(),
      slug: fileName.replace('.md', ''),
      subtitle: matterResult.data.subtitle,
    };
  });

  return posts;
};

export default getPostMeta;
