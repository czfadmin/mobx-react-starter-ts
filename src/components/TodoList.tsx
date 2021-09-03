import { inject, observer } from "mobx-react";
import { Key, useContext } from "react";
import { Todo } from "../models/TodoModel";
import { TodoStore } from "../stores/TodoStore";

import { TodoView } from "./TodoView";

export interface TodoListViewProps {
    todoStore: TodoStore;
}

export const TodoListView = observer((props: TodoListViewProps) => {
    const { todoStore } = props;
    return (
        <ul style={{ listStyle: "none", marginLeft: "0" }}>
            {todoStore.todos.map((todo: Todo) => (
                <TodoView key={todo.id} todo={todo} />
            ))}
        </ul>
    );
});
