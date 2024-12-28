import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen.js";
import "./index.css";

const root = document.querySelector("div#root")!;

const history = createMemoryHistory({
  initialEntries: ["/"],
});
const router = createRouter({ routeTree, history });

createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
