import {
  useState, React
  //useEffect
} from "react";
import gql from "apollo-boost";
import { graphql } from "react-apollo";

// components
import TaskDetails from './TaskDetails';

const getTasksQuery = gql`
query {
  tasks {
    id
    title
  }
}`;

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  function displayTasks() {
    console.log(props.data);
    const data = props.data;

    if (data.loading) {
      return ( <div> Loading tasks... </div>);
      }
      else {
        return data.tasks.map(task => {
            return ( <li key = {task.id}
              onClick = { (e) => { setState({ selected: task.id }); } } >{ task.title} </li>);
            })
        }
    }

  console.log(props);
  return (
  <div>
    <ul id="task-list"> {displayTasks()}</ul>
    <TaskDetails taskId={state.selected}/>
  </div>
  );
}


export default graphql(getTasksQuery)(TaskList);
