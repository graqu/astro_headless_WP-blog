"use client";

import type { WP_Post } from "@src/utils/types/types";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./AboutUsContent.module.css";

type Props = {
  url: string;
};

const AboutUsContent = ({ url }: Props) => {
  const [content, setContent] = useState<string | null>(null);

  const fetchSiteData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: WP_Post = await response.json();
      if (data.content && typeof data.content === "string") {
        setContent(data.content);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    fetchSiteData();
  }, [url]);

  console.log(content);

  return (
    <>
      {!content ? (
        <div>
          <Skeleton count={2} />
          <Skeleton width={100} height={20} className="pb-4" />
          <Skeleton count={3} />
          <Skeleton width={100} height={20} className="pb-4" />
          <Skeleton count={4} />
        </div>
      ) : (
        <div
          className={`${styles["wp-content"]} 'wp-content`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  );
};

export default AboutUsContent;
