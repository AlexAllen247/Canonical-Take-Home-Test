import axios from "axios";
const baseUrl =
  "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export default { getAll };
