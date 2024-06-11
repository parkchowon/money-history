import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/stores/store";
import "./styles/index.css";
import "./styles/reset.css";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 5000,
  //   },
  // },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);
