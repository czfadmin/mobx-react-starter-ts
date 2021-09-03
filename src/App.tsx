import { ChangeEvent, useState } from "react";
import TodoCompletedListView from "./components/TodoCompletedListView";
import { TodoListView } from "./components/TodoList";
import { useStore } from "./stores/useStore";

function App() {
    const store = useStore(null);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const handleChange = (event: ChangeEvent<any>) => {
        setNewTodoTitle(event.target.value);
    };
    const handleAddNewTodo=()=>{
        store.todoStore.addTodo(newTodoTitle)
    }
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent:'center',
                padding:10,
                margin:"0 auto",
                marginTop:10,
            }}
        >
            <div>
                <input value={newTodoTitle} onChange={handleChange} />
                <button onClick={handleAddNewTodo}>Add</button>
            </div>
            <TodoListView todoStore={store.todoStore} />
            <span style={{display:'block',borderTop:"1px solid gray"}}/>
            <TodoCompletedListView todoStore={store.todoStore}/>
        </div>
    );
}

export default App;
