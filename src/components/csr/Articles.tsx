import type { WP_Post } from "@src/utils/types/types";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

type Props = {
  url: string;
  timeStamp: Date;
};

const Articles = ({ url, timeStamp }: Props) => {
  const [posts, setPosts] = useState<WP_Post[]>([]);
  /** Display post skeleton before load from wordpress */
  const dummyPosts = Array.from({ length: 6 }, (_, i) => i);

  const fetchPostsData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setPosts(data.posts || []);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchPostsData();
  }, [url]);

  return (
    <>
      {posts && posts.length > 0
        ? posts.map((post) => <ArticleCard key={post.ID} post={post} />)
        : dummyPosts.map((_, index) => <ArticleCard key={index} />)}
    </>
  );
};

export default Articles;
