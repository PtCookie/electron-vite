import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
    </>
  );
}
