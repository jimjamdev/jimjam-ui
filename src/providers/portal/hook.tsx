import { useContext } from 'react';
import { PortalContext } from '~ui/providers/portal/context';

export const usePortal = () => {
  const { portals, openPortal, closePortal } = useContext(PortalContext);
  return { portals, openPortal, closePortal };
};
