import React from "react";
import Button from "./Button";
import { SiTicktick } from "react-icons/si";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todo = ({
  title,
  body,
  date,
  handleDelete,
  handleEdit,
  handleMarkAsCompleted,
  status,
}) => {
  const actions = [
    {
      id: 1,
      icon: <SiTicktick size={20} />,
    },
    {
      id: 2,
      icon: <FaEdit size={20} />,
    },
    {
      id: 3,
      icon: <RiDeleteBin6Line size={20} />,
    },
  ];

  return (
    <div className="todos-container heading-div">
      <div className="content">
        <h2>{title}</h2>
        <p>{body}</p>
        <h3>Date: {date}</h3>
        <p>{status}</p>
      </div>
      <div className="action-btns">
        {actions.map((action) => (
          <Button
            key={action.id}
            icon={action.icon}
            className="icon-img"
            onClick={
              action.id === 1
                ? handleMarkAsCompleted
                : action.id === 2
                ? handleEdit
                : handleDelete
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
