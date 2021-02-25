import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { filterTask , clearFilterTask} from "./../../store/reducers/actions/addTask";

const FilterComponent = ({ addTaskStore: { filterList }, filterTask, clearFilterTask }) => {
  const text = useRef("");

  useEffect(() => {
    if (filterList === null) {
      text.current.value = "";
    }
  }, []);

  const handleOnChange = (event) => {
    if (text.current.value !== "") {
        console.log(event.target.value)
        filterTask(event.target.value);
      } else {
        clearFilterTask();
      }
  };

  return (
    <form>
      <input
        onChange={handleOnChange}
        ref={text}
        className="input"
        type="text"
        placeholder="Filter ....."
      />
    </form>
  );
};

const mapStateToProps = (state) => ({
  addTaskStore: state.addreducer,
});

export default connect(mapStateToProps, { filterTask, clearFilterTask })(FilterComponent);
