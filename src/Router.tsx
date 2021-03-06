import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}`}>
          <ToDoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
