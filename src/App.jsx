import { useEffect } from "react";
import "./sass/App.scss";
import ControlBar from "./components/control_bar/ControlBar";
import TodosView from "./components/todos_view/TodosView";
import { getTodos } from "./utils/persistStore";
import useTodoStore from "./store/todoStore";
import { useThemeStore } from "./store/themeStore";

function App() {
  useEffect(() => {
    const todosFromLS = getTodos();
    if (todosFromLS) {
      useTodoStore.getState().setTodos(todosFromLS);
    }
  }, []);

  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <div className={`wrapper theme-${theme}`}>
        <ControlBar />
        <TodosView />
      </div>
    </>
  );
}

export default App;
