import { observer } from "mobx-react";
import { Todo } from "../models/TodoModel";

export const TodoView = observer(({ todo }: { todo: Todo }) => (
    <li
        style={{
            padding: "1em",
            margin: ".25em",
            border: "1px solid gray",
            width: "100%",
            borderRadius: 4,
        }}
    >
        <input
            type="checkbox"
            checked={todo.finished}
            onChange={() => todo.toggle()}
        />
        {todo.title}
    </li>
));
