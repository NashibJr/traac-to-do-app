import React from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Todo from "./components/Todo";

/**
 * id => random number
 * title => string
 * body => string
 * status => completed|pending|cancelled
 * date => date-month-year
 */

function App() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [filteredTodos, setFilteredTodos] = React.useState([]); // create a copy of the todos
  const [isEdit, setIsEdit] = React.useState(false);
  const [todoId, setTodId] = React.useState(null);

  const date = new Date();

  const onChangeTitle = (event) => setTitle(event.target.value);

  const onChangeBody = (event) => setBody(event.target.value);

  const onChangeSearch = (event) => setSearch(event.target.value);

  // We use the life cycle methods to archive this.
  React.useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  React.useEffect(() => {
    if (search === "") {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(() =>
        todos?.filter((todo) =>
          todo.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.round(Math.random() * 1000),
        title,
        body,
        status: "Pending",
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      },
    ]);
    setBody("");
    setTitle("");
  };

  const markAsCompleted = (id) => {
    try {
      // find the todo
      // we update it's status
      // delete that todo with the old status
      // we replace with the new todo with the new status

      setFilteredTodos(() =>
        filteredTodos?.map((todo, index) => {
          if (todo.id === id) {
            todo.status = "Completed";
            filteredTodos.splice(index, 1, todo);
          }

          return todo;
        })
      );
    } catch (error) {
      console.log(error, ">>>>");
    }
  };

  const handleSetTodoId = (id) => {
    const todo = filteredTodos?.find((todo) => todo.id === id);
    setTitle(todo.title);
    setBody(todo.body);
    setTodId(id);
    setIsEdit(true);
  };

  const handleDelete = (id) =>
    setFilteredTodos(() => filteredTodos?.filter((todo) => todo.id !== id));

  const handleEdit = (event) => {
    try {
      event.preventDefault();
      setFilteredTodos(() =>
        filteredTodos?.flatMap((todo, index) => {
          if (todo.id === todoId) {
            todo.title = title;
            todo.body = body;
            filteredTodos.splice(index, 1, todo);

            return [todo];
          }

          return [todo];
        })
      );
      setTitle("");
      setBody("");
      setTodId(null);
      setIsEdit(false);
    } catch (error) {
      console.log(error, ">>>>");
    }
  };

  console.log(isEdit, ">>>>");

  return (
    <div className="container">
      <form className="heading-div" onSubmit={isEdit ? handleEdit : addTodo}>
        <div className="input-content">
          <Input
            name="title"
            value={title}
            onChange={onChangeTitle}
            placeholder="Todo title"
            required
          />
          <Input
            name="body"
            value={body}
            onChange={onChangeBody}
            placeholder="Todo body"
            required
          />
        </div>
        <div className="add-btn-container">
          <Button
            icon={<FaPlus color="#fff" className="icon" size={18} />}
            className="add-btn"
            type="submit"
          />
        </div>
      </form>
      <div className="search-container">
        <Input
          name="body"
          value={search}
          onChange={onChangeSearch}
          placeholder="Search by title"
        />
        <IoIosSearch size={22} className="search-icon" />
      </div>
      <div className="todos">
        {filteredTodos?.map((todo) => (
          <Todo
            title={todo.title}
            body={todo.body}
            key={todo.id}
            date={todo.date}
            status={todo.status}
            handleMarkAsCompleted={() => markAsCompleted(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
            handleEdit={() => handleSetTodoId(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
