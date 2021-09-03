import { makeAutoObservable } from "mobx";
import RootStore from "./RootStore";

class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this, { rootStore: false });
        this.rootStore = rootStore;
    }
}
export default UserStore;
