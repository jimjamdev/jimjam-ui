import { ReactNode, useCallback, useState } from 'react';
import { PortalContext, TPortal } from '~ui/providers/portal/context';

export const PortalProvider = ({ children }: { children: ReactNode }) => {
  const [portals, setPortals] = useState<Array<TPortal>>([]);

  const openPortal = useCallback(
    (key: string, props: any) => {
      setPortals((prevPortals) => [...prevPortals, { key, props }]);
    },
    [setPortals]
  );

  const closePortal = useCallback(
    (key: string) => {
      setPortals((prevPortals) =>
        prevPortals.filter((portal) => portal.key !== key)
      );
    },
    [setPortals]
  );

  return (
    <PortalContext.Provider value={{ portals, openPortal, closePortal }}>
      {children}
    </PortalContext.Provider>
  );
};
