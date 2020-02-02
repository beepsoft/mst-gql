import { IAnyModelType, IReferenceType } from "mobx-state-tree";
export declare function MSTGQLRef<T extends IAnyModelType>(targetType: T): IReferenceType<T>;
export declare const MSTGQLObject: import("mobx-state-tree").IModelType<{}, {
    __setStore(s: import("mobx-state-tree").ModelInstanceTypeProps<{
        __queryCache: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IMapType<import("mobx-state-tree").IType<any, any, any>>, [undefined]>;
    }> & {
        ssr: boolean;
        __promises: Map<string, Promise<unknown>>;
        __afterInit: boolean;
    } & {
        merge: (data: unknown) => any;
        deflate: (data: unknown) => any;
        mutate: <T>(mutation: string | import("graphql").DocumentNode, variables?: any, optimisticUpdate?: (() => void) | undefined) => import("./Query").Query<T>;
        query: <T>(query: string | import("graphql").DocumentNode, variables?: any, options?: import("./Query").QueryOptions) => import("./Query").Query<T>;
        subscribe: <T = any>(query: string | import("graphql").DocumentNode, variables?: any, onData?: ((item: T) => void) | undefined) => () => void;
        rawRequest: (query: string, variables: any) => Promise<any>;
        __pushPromise(promise: Promise<{}>, queryKey: string): void;
        __runInStoreContext<T>(fn: () => T): T;
        __cacheResponse(key: string, response: any): void;
        __onAfterInit(): void;
    } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
        __queryCache: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IMapType<import("mobx-state-tree").IType<any, any, any>>, [undefined]>;
    }, {
        ssr: boolean;
        __promises: Map<string, Promise<unknown>>;
        __afterInit: boolean;
    } & {
        merge: (data: unknown) => any;
        deflate: (data: unknown) => any;
        mutate: <T>(mutation: string | import("graphql").DocumentNode, variables?: any, optimisticUpdate?: (() => void) | undefined) => import("./Query").Query<T>;
        query: <T>(query: string | import("graphql").DocumentNode, variables?: any, options?: import("./Query").QueryOptions) => import("./Query").Query<T>;
        subscribe: <T = any>(query: string | import("graphql").DocumentNode, variables?: any, onData?: ((item: T) => void) | undefined) => () => void;
        rawRequest: (query: string, variables: any) => Promise<any>;
        __pushPromise(promise: Promise<{}>, queryKey: string): void;
        __runInStoreContext<T>(fn: () => T): T;
        __cacheResponse(key: string, response: any): void;
        __onAfterInit(): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>): void;
} & {
    __getStore<T>(): T;
    hasLoaded(key: string): boolean;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;