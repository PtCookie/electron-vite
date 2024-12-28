import React from "react";

type Props = {
  platform: string;
  arch: string;
};

export function SystemInfo({ platform, arch }: Props) {
  return (
    <ul className="p-6 list-disc">
      <li>{platform}</li>
      <li>{arch}</li>
    </ul>
  );
}
