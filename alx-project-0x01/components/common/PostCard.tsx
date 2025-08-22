//import PostCard from "@/components/common/PostCard";
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="flex flex-col h-screen">
      
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
            <p key={id}>
              <strong>{title}</strong>
              <span>{body}</span>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};export default Posts;

           
