import React, {
  Component,
} from 'react';
import { Checkbox} from "primereact/checkbox";

import { capitalize } from "../../utilities";

interface TaskItem {
  description: string;
  completed: boolean;
  id: string;
}

export default class Tasks extends Component {
  // TODO: build the get, put, and post for the tasks items
  // TODO: build the interface for the tasks items

  render() {
    const taskItems: TaskItem[] = [{
      description: "take out the trash",
      completed: false,
      id: "1",
    }]

    return (
      <div className="p-grid">
        <div className="p-col-5 p-text-bold">
          Task
        </div>
        <div className="p-col-5 p-text-bold">
          Completed
        </div>

        {taskItems.map((item) => (
          <>
            <div className="p-col-5">
              {capitalize(item.description)}
            </div>
            <div className="p-col-5">
              <Checkbox name={item.id} checked={item.completed} />
            </div>
          </>
        ))}
      </div>
    );
  }
}
