import React from 'react';
import { TodoStore } from './TodoStore';
import UserStore from './UserStore';
export default class RootStore {
    todoStore:TodoStore
    userStore:UserStore
    constructor() {
        this.userStore = new UserStore(this);
        this.todoStore = new TodoStore(this);
    }
}
export const RootContext=React.createContext<any>({})
export const RootStoreProvider=RootContext.Provider