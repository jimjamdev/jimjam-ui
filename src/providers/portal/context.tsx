import {Consumer, createContext, Provider} from "react";

export interface TPortal {
    key: string;
    props: any;
}

export interface TPortalContext {
    Provider: Provider<any>;
    Consumer: Consumer<any>;
    portals?: Array<TPortal>;
}


export const PortalContext: TPortalContext = createContext({});
