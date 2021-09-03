import { observer } from "mobx-react";
import { TodoStore } from "../stores/TodoStore";
export interface TodoCompletedListViewProps{
    todoStore:TodoStore
}
const TodoCompletedListView = observer((props: TodoCompletedListViewProps) => {
    const {todoStore}= props;
    return <ul>
        {todoStore.completedTodos.map(todo=>{
            return <li key={todo.id}>{todo.title}</li>
        })}
    </ul>;
});

export default TodoCompletedListView