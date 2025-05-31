/**
 * Function to format a date into a human-readable string.
 */
export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/**
 * Function to prepare a description by removing HTML tags and shortening the string.
 * usage: articleCard or metaDescription
 */
export const shortenDescription = (
  content: string | undefined,
  meta?: true
) => {
  if (!content) return null;
  const clearString = content.replace(/<[^>]+>/g, ""); // Remove HTML tags
  const lengthLimit = meta ? 150 : 100; // Set length limit based on context
  const dots = meta ? "..." : "";

  const shortenedString =
    clearString.length > lengthLimit
      ? clearString.substring(0, lengthLimit) + dots
      : clearString;

  return shortenedString;
};
