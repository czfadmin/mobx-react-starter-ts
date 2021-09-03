import { useMemo } from "react";
import RootStore from "./RootStore";

let store: RootStore;

function initializeStore(initialData: any) {
    const _store = store ?? new RootStore();

    // For SSG and SSR always create a new store
    if (typeof window === "undefined") return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
}

export function useStore(initialState: any) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
