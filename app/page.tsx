import Link from 'next/link';
import GetPostMetaData from '../components/GetPostMetaData';
import PostPreview from '../components/PostPreview';

export default function Home() {
  const postMetaDatas = GetPostMetaData();
  const postPreviews = postMetaDatas.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {postPreviews}</div>
  );
}
