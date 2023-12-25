import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";
import { useEffect } from "react";
import axios from "axios";
import { setTodos } from "./redux/actions/todoAction";
const App = () => {
  const state = useSelector((store) => store);
  const dispatch = useDispatch();
  axios.defaults.baseURL = "http://localhost:4500";
  useEffect(() => {
    axios.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);
  return (
    <div>
      <div className="container p-5 ">
        <h2 className="text-center pb-5 ">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddTodo />
        {state.todos.length == 0 ? (
          <h4 className="my-5 text-center text-warning">
            Lütfen todo ekleyiniz!
          </h4>
        ) : (
          <ListTodos />
        )}
      </div>
    </div>
  );
};

export default App;
