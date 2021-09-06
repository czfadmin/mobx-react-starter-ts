import { TodoStore } from "./../stores/TodoStore";
import { makeAutoObservable, makeObservable, observable } from "mobx";

export class Todo {
    static seed = 0;
    store: TodoStore;
    id: number;
    title = "";
    finished: boolean;
    constructor(store: any, title: string, finished: boolean) {
        makeObservable(this, {
            title: observable,
            id: observable,
            store: false,
            finished: observable,
        });

        Todo.seed += 1;
        this.title = title;
        this.id = Todo.seed;
        this.finished = finished;
        this.store = store;
    }
    toggle() {
        this.finished = !this.finished;
    }
    setTitle(title: string) {
        this.title = title;
    }

    toJs() {
        return {
            id: this.id,
            title: this.title,
            finished: this.finished,
        };
    }
}
