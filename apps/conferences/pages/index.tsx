import { Button, RemotePage } from "ui";

interface IProps {
  withHostApp?: boolean;
}

export default function ConferencesApplication({
  withHostApp = false,
}: IProps) {
  return (
    <>
      <h1>Conferences</h1>
      <RemotePage remoteType="NextJS" withHostApp={withHostApp} />
      <Button>More conferences</Button>
    </>
  );
}
