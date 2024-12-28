import React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <h1 className="my-2 text-2xl">💖 Hello World!</h1>
      <p className="text-sm">Welcome to your Electron application.</p>
    </div>
  );
}
