import React, { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import ItemComponent from "./item/item.component";
import FilterComponent from "./item/filter.component";

import {
  addTask,
  updateTask,
  clearCurrentTask,
} from "./../store/reducers/actions/addTask";

import { connect } from "react-redux";

const DashBoardComponent = ({
  addTaskStore: { taskList, filterList, currentTask, taskListDone },
  addTask,
  updateTask,
  clearCurrentTask,
}) => {
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (currentTask !== "") {
      setNewTask(currentTask.task);
    } else {
      setNewTask("");
    }
  }, [currentTask, filterList, taskList]);

  const handleOnSubmit = (evnt) => {
    evnt.preventDefault();
    if (currentTask !== "") {
      currentTask.task = newTask;
      updateTask(currentTask);
    } else {
      const task = {
        id: uuidv4(),
        task: newTask,
        state: "todo",
      };
      if (task.task !== null && task.task !== undefined && task.task !== "") {
        addTask(task);
      }
    }
    setNewTask("");
    clearCurrentTask();
  };

  return (
    <Fragment>
      <div className="container">
        <div className="panel " style={stylePanel}>
          <p className="panel-heading">{taskList.length} Todos</p>
        </div>
        <FilterComponent />
        <form onSubmit={handleOnSubmit}>
          {filterList === null ? (
            taskList.length !== 0 ? (
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    {taskList.map((item, i) => (
                      <ItemComponent key={i} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            <div className="card">
              <div className="card-content">
                <div className="content">
                  {filterList.map((item, i) => (
                    <ItemComponent key={i} item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div style={styleTask}>
            <input
              style={styleWidth}
              onChange={(evnt) => setNewTask(evnt.target.value)}
              value={newTask}
              className="input"
              type="text"
              placeholder="Add new Task"
            />
            <button type="submit" style={styleWidth}>
              {currentTask !== "" ? "edit Task" : " Add New Task"}
            </button>
          </div>
        </form>
        <div className="panel " style={styleDone}>
          <p className="panel-heading">{taskListDone.length} Done</p>
        </div>
        {taskListDone.length !== 0 ? (
          <div className="card">
            <div className="card-content">
              <div className="content">
                {taskListDone.map((item, i) => (
                  <ItemComponent key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

const styleTask = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "15px",
};

const styleWidth = {
  width: "47%",
};

const styleDone = {
  marginTop: "20px",
};
const stylePanel = {
  height: "inherit",
};

const mapStateToProps = (state) => ({
  addTaskStore: state.addreducer,
});

export default connect(mapStateToProps, {
  addTask,
  clearCurrentTask,
  updateTask,
})(DashBoardComponent);
