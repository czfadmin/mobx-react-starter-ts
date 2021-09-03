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

    get completedTodos(){
        return this.todos.filter(todo=>todo.finished)
    }

    addTodo(title: string) {
        this.todos.push(new Todo(this, title, false));
    }

    toggleAll(checked: boolean) {
        this.todos.forEach((todo) => (todo.finished = checked));
    }

    toJS() {
        return this.todos.map((todo) => todo.toJs());
    }

    clearFinished() {
        this.todos = this.todos.filter((todo) => !todo.finished);
    }
}
