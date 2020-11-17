import React, {
  Component,
} from 'react';
import { Checkbox } from 'primereact/checkbox'

import { capitalize } from "../../utilities";

interface HouseItem {
  room: string;
  cost: number;
  completed: boolean;
  id: string;
}

export default class House extends Component {
  // TODO: build the get, put and post for the house items

  render() {
    const houseItems: HouseItem[] = [{
      room: "kitchen",
      cost: 16000,
      completed: true,
      id: "1",
    },{
      room: "spare room",
      cost: 500,
      completed: false,
      id: "2",
    }];

    return (
      <div className="p-grid">
        <div className="p-col-4 p-text-bold">Room</div>
        <div className="p-col-4 p-text-bold">Cost</div>
        <div className="p-col-4 p-text-bold">Completed</div>

      {houseItems.map((item) => (
          <>
            <div className="p-col-4">{capitalize(item.room)}</div>
            <div className="p-col-4">&pound;{item.cost}</div>
            <div className="p-col-4">
              <Checkbox name={item.id} checked={item.completed} />
            </div>
          </>
        ))}
      </div>
    );
  }
}
