import Link from 'next/link';
import GetPostMetaData from '../components/GetPostMetaData';
import PostPreview from '../components/PostPreview';

export default function Home() {
  const postMetaDatas = GetPostMetaData();
  const postPreviews = postMetaDatas.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div> {postPreviews}</div>;
}
