import React from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? // Render nothing in production
      () => null
    : // Lazy load in development
      React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <div className="max-w-2xl m-auto p-8">
      <div className="flex gap-4">
        <Link className="text-xl text-blue-700" to="/">
          Home
        </Link>
        <Link className="text-xl text-blue-700" to="/about">
          About
        </Link>
      </div>
      <hr className="my-2" />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
