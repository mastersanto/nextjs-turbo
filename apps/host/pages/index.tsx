import dynamic from "next/dynamic";
import { Suspense } from "react";
import { HostPage } from "ui";

const RemoteNextPage = dynamic<{ withHostApp: boolean }>(
  () => import("conferences/page"),
  {
    suspense: true,
    ssr: false,
  }
);
const RemoteNextComponent = dynamic(() => import("conferences/component"), {
  suspense: true,
  ssr: false,
});

export default function HostApplication() {
  return (
    <HostPage
      hostType="NextJS"
      remoteComponents={
        <Suspense>
          <RemoteNextComponent />
        </Suspense>
      }
    >
      <Suspense>
        <RemoteNextPage withHostApp />
      </Suspense>
    </HostPage>
  );
}
