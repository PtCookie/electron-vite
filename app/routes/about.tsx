import { createFileRoute } from "@tanstack/react-router";

import { getSystemInfo } from "../ipc/renderer.js";
import { SystemInfo } from "../../components/SystemInfo.js";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
  loader: () => getSystemInfo(),
});

function RouteComponent() {
  const { platform, arch }: ISystemInfo = Route.useLoaderData();

  return (
    <>
      <h1>About</h1>
      <p>This route is generated by TanStack Router.</p>
      <SystemInfo platform={platform} arch={arch} />
    </>
  );
}