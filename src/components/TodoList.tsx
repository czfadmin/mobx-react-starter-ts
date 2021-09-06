import List from "@material-ui/core/List/List";
import {observer } from "mobx-react";
import { Todo } from "../models/TodoModel";
import { TodoStore } from "../stores/TodoStore";

import { TodoView } from "./TodoView";

export interface TodoListViewProps {
    todoStore: TodoStore;
}

export const TodoListView = observer((props: TodoListViewProps) => {
    const { todoStore } = props;
    return (
        <List
            sx={{ width: "100%",bgcolor: "background.paper" }}
        >
            {todoStore.todos.map((todo: Todo) => (
                <TodoView key={todo.id} todo={todo} />
            ))}
        </List>
    );
});
