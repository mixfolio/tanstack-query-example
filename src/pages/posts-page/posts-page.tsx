import styles from "./posts-page.module.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";

type Post = {
  id: string;
  title: string;
};

function getPosts() {
  return api.get<Post[]>("/posts").then((res) => res.data);
}

export const PostsPage = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // staleTime: 5000,
    // gcTime: 10000, // время, через которое данные будут удаляться из кэша
  });

  return (
    <div className={styles.page}>
      {/* {status}
      {fetchStatus}
      {isLoading && <div>Loading...</div>}
      {isPending && <div>Pending...</div>}
      {isFetching && <div>Fetching...</div>} */}
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
