import { useState, type FC } from "react";

type Props = {
  url: string;
};

const Articles: FC<Props> = ({ url }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const fetchPostsData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setShowConfirm(true);
      console.log(data);
    } catch (error) {
      setShowConfirm(false);
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      {showConfirm ? <p>{url}</p> : <p>&nbsp;</p>}
      <button
        className="cursor-pointer border-2 border-blue-500 bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200"
        onClick={fetchPostsData}
      >
        Click Me
      </button>
    </>
  );
};

export default Articles;
