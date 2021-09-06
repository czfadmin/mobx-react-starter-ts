import {
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    useTheme,
} from "@material-ui/core";
import List from "@material-ui/core/List/List";
import { observer } from "mobx-react";
import { TodoStore } from "../stores/TodoStore";
export interface TodoCompletedListViewProps {
    todoStore: TodoStore;
}
const TodoCompletedListView = observer((props: TodoCompletedListViewProps) => {
    const theme = useTheme();
    const { todoStore } = props;

    return (
        <List>
            {todoStore.completedTodos.map((todo) => {
                return (
                    <ListItem dense key={todo.id}>
                        <ListItemButton
                            dense
                            onClick={() => todo.toggle()}
                            sx={{ background: theme.palette.grey[300] }}
                        >
                            <ListItemText
                                sx={{
                                    minWidth: 320,
                                    width: "100%",
                                }}
                                id={`${todo.id}`}
                                primary={
                                    <Typography variant="subtitle1">
                                        {`${todo.id}-${todo.title}`}
                                    </Typography>
                                }
                            ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
});

export default TodoCompletedListView;
