import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";

export function usePosts() {
  const { data, error, isLoading } = useSWR("/api/posts", fetcher);

  return {
    posts: data,
    error,
    isLoading,
  };
}
