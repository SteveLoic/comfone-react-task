import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckCircle,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import {
  deleteTask,
  setCurrentTask,
  changeStatusTask,
  clearCurrentTask,
} from "./../../store/reducers/actions/addTask";

const ItemComponent = ({
  addTaskStore: { filterList },
  item,
  deleteTask,
  setCurrentTask,
  changeStatusTask,
  clearCurrentTask,
}) => {
  useEffect(() => {}, [filterList]);

  const handleDelete = (item) => {
    deleteTask(item);
  };

  const handleChangeTask = (item) => {
    setCurrentTask(item);
  };

  const handleChangeStatus = (item) => {
    item.state = "done";
    changeStatusTask(item);
    clearCurrentTask();
  };

  return (
    <div onClick={() => handleChangeTask(item)} className="notification ">
      {item.state === "done" ? (
        <FontAwesomeIcon icon={faCheckCircle} />
      ) : (
        <FontAwesomeIcon
          onClick={() => handleChangeStatus(item)}
          icon={faClipboardList}
        />
      )}

      <span style={styleIcon}>{item.task}</span>
      {item.state === "done" ? (
        ""
      ) : (
        <button onClick={() => handleDelete(item)} className="delete"></button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  addTaskStore: state.addreducer,
});
const styleIcon = {
  marginLeft: "10px",
};
export default connect(mapStateToProps, {
  deleteTask,
  setCurrentTask,
  changeStatusTask,
  clearCurrentTask,
})(ItemComponent);
