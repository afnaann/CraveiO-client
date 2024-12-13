import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./context/context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <div className="bg-orange-50">
          <App />
        </div>
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
