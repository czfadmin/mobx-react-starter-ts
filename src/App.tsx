import {
    Button,
    CssBaseline,
    Grid,
    TextField,
    useTheme,
} from "@material-ui/core";
import Box from "@material-ui/core/Box/Box";
import Divider from "@material-ui/core/Divider/Divider";
import { ChangeEvent, useState } from "react";
import TodoCompletedListView from "./components/TodoCompletedListView";
import { TodoListView } from "./components/TodoList";
import { useStore } from "./stores/useStore";

function App() {
    const store = useStore(null);
    const theme = useTheme();
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const handleChange = (event: ChangeEvent<any>) => {
        setNewTodoTitle(event.target.value);
    };
    const handleAddNewTodo = () => {
        store.todoStore.addTodo(newTodoTitle);
    };
    return (
        <Box
            style={{
                display: "flex",
                width: "100%",
                height: "100vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                padding: 10,
                margin: "0 auto",
                background: theme.palette.common.white,
            }}
        >
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <TextField
                    value={newTodoTitle}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                />
                <Button
                    onClick={handleAddNewTodo}
                    variant="outlined"
                    sx={{
                        padding: theme.spacing(1),
                        marginLeft: theme.spacing(1),
                    }}
                >
                    Add
                </Button>
            </Box>
            <Box>
                <Grid container sx={{ display: "flex", flexDirection: "row" }} spacing={2}>
                    <Grid item xs={4} sx={{ width: "100%" ,minWidth:360,}}>
                        <TodoListView todoStore={store.todoStore} />
                    </Grid>
                    <Grid item xs={1}>
                        <Divider orientation="vertical"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TodoCompletedListView todoStore={store.todoStore} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default App;
