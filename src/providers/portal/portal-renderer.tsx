import { Portal } from '~ui/components/portal';
import { usePortal, TPortal } from '~ui/providers/portal';

export function PortalRenderer() {
  const { portals, closePortal } = usePortal();
  return (
    <>
      {portals.map((portal: TPortal) => (
        <Portal key={portal.key} portal={portal} closePortal={closePortal} />
      ))}
    </>
  );
}
