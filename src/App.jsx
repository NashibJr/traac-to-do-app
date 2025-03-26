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

  const date = new Date();

  const onChangeTitle = (event) => setTitle(event.target.value);

  const onChangeBody = (event) => setBody(event.target.value);

  const onChangeSearch = (event) => setSearch(event.target.value);

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

  return (
    <div className="container">
      <form className="heading-div" onSubmit={addTodo}>
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
        {todos?.map((todo) => (
          <Todo
            title={todo.title}
            body={todo.body}
            key={todo.id}
            date={todo.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
