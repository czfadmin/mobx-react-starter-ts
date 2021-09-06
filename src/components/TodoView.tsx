import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import { observer } from "mobx-react";
import { Todo } from "../models/TodoModel";

export const TodoView = observer(({ todo }: { todo: Todo }) => {
    const handleToggle = () => todo.toggle();
    return (
        <ListItem disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.finished}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": `${todo.finished}` }}
                    />
                </ListItemIcon>
                <ListItemText
                    id={`${todo.id}`}
                    primary={`${todo.id}-${todo.title}`}
                />
            </ListItemButton>
        </ListItem>
    );
});
