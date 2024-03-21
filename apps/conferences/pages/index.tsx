import { RemotePage } from "ui";

interface IProps {
  withHostApp?: boolean;
}

export default function ConferencesApplication({ withHostApp = false }: IProps) {
  return <RemotePage remoteType="NextJS" withHostApp={withHostApp} />;
}
