import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/layout/layout";
import { UsersPage } from "./pages/users-page/users-page";
import { PostDetailsPage } from "./pages/post-details-page/post-details-page";
import { PostsPage } from "./pages/posts-page/posts-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 1000 * 60 * 5,
  //   },
  // },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
