import { formatDate } from "@src/utils/methods/utils";
import type { WP_Post } from "@src/utils/types/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  post?: WP_Post;
};

const ArticleCard = ({ post }: Props) => {
  const { title, content, date, featured_image: image, URL: href } = post || {};
  const formattedDate = date && formatDate(date);
  const preparedDescription = (content: string | undefined) => {
    if (!content) return null;
    const clearString = content.replace(/<[^>]+>/g, ""); // Remove HTML tags
    const shortenedString =
      clearString.length > 100
        ? clearString.substring(0, 100) + "..."
        : clearString;

    return shortenedString;
  };
  const formatTitle = (title: string | undefined) => {
    if (!title) return null;
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
  };

  return post ? (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h2 className="font-bold h-[2em] text-gray-800 uppercase dark:text-white">
          {formatTitle(title)}
        </h2>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {preparedDescription(content)}
        </p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={image || ""}
        alt={title || "Article Image"}
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <p className="text-sm font-bold text-white">{formattedDate}</p>
        <a
          className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          href={href}
        >
          Read
        </a>
      </div>
    </div>
  ) : (
    <Skeleton width={320} height={380} />
  );
};

export default ArticleCard;
