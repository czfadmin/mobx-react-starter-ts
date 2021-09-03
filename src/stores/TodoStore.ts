import { Todo } from "./../models/TodoModel";
import { action, computed, makeAutoObservable } from "mobx";

import RootStore from "./RootStore";

export class TodoStore {
    todos: Todo[];
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {
            rootStore: false,
        });
        this.rootStore = rootStore;
        this.todos = [];
    }

    @computed
    get completedTodos(){
        return this.todos.filter(todo=>todo.finished)
    }

    @action
    addTodo(title: string) {
        this.todos.push(new Todo(this, title, false));
    }

    @action
    toggleAll(checked: boolean) {
        this.todos.forEach((todo) => (todo.finished = checked));
    }

    toJS() {
        return this.todos.map((todo) => todo.toJs());
    }

    @action
    clearFinished() {
        this.todos = this.todos.filter((todo) => !todo.finished);
    }
}
