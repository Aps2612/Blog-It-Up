export const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  export const truncateText = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };