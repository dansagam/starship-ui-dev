import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./main.css";
import LayoutProvider from "./contexts/LayoutContext/LayoutContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {},
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LayoutProvider>
          <RouterProvider router={router} />
          <ToastContainer position="top-right" />
          <ReactQueryDevtools initialIsOpen={false} />
        </LayoutProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
