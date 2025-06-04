// pages/posts/index.tsx

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  // 1. State to hold the currently selected/edited post (or null if none)
  const [post, setPost] = useState<PostData | null>(null);

  // 2. State to toggle the modal open/closed
  const [isModalOpen, setModalOpen] = useState(false);

  // Whenever `post` changes, log it (this “uses” the variable)
  useEffect(() => {
    console.log("Current post state:", post);
  }, [post]);

  const handleAddClick = () => {
    // Opening the modal for a brand-new post (null indicates “new”)
    setPost(null);
    setModalOpen(true);
  };

  const handleSubmit = (newPost: PostData) => {
    // Here you would normally send newPost to your API or update state.
    console.log("Submitting post:", newPost);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-grow bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={handleAddClick}
            className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((p) => (
            <PostCard
              key={p.id}
              id={p.id}
              userId={p.userId}
              title={p.title}
              body={p.body}
            />
          ))}
        </div>

        {isModalOpen && (
          <PostModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleSubmit}
          />
        )}
      </main>
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}