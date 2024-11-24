type Props = {
  platform: string;
  arch: string;
};

export function SystemInfo({ platform, arch }: Props) {
  return (
    <ul>
      <li>{platform}</li>
      <li>{arch}</li>
    </ul>
  );
}
