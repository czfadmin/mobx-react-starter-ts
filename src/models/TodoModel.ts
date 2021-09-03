import { TodoStore } from "./../stores/TodoStore";
import { makeAutoObservable, makeObservable, observable } from "mobx";

export class Todo {
    store: TodoStore;
    id: number;
    title = "";
    finished:boolean;
    constructor(
        store: any,
        title: string,
        finished: boolean,
        id: number = Math.random()
    ) {
        makeObservable(this,{
            title:observable,
            id:observable,
            store:false,
            finished:observable,
        });

        this.title = title;
        this.id = id;
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
    static fromJS(store: TodoStore, obj: Todo) {
        return new Todo(store, obj.title, obj.finished, obj.id);
    }
}
