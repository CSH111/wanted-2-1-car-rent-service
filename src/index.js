import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>
);
