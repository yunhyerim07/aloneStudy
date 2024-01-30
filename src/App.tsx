import './App.css';
import React, { useState } from 'react';
import UseStateHook from './UseStateHook.tsx';
import UseEffectHook from './UseEffectHook';
import { ExpensiveItemData } from './components/ExpensiveItemData';
import { data } from './components/Grid/GridData';
import DataGrid from './components/Grid/DataGrid';

function App() {
  const [items] = useState(ExpensiveItemData);
  return (
    <div>
      <div className="m-8">
        <h2>Hook (useState)</h2>
        <UseStateHook />
      </div>
      <div className="m-8">
        <h2>Hook (useEffect)</h2>
        <UseEffectHook />
      </div>
      <div className="m-8">
        <h2>Let's get started!</h2>
        <div className="container">
          {
            items.map((a:{id:string, date:Date, amount:number}, i) => <ExpensiveItem items={items[i]} num={i} key={i} />)
          }
        </div>
      </div>
      <div className="m-8">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>city</th>
              <th>birth</th>
            </tr>
          </thead>
          <tbody>
            {
                data.gridData.map((item) => (
                  <DataGrid
                    id={item.id}
                    name={item.name}
                    city={item.city}
                    birth={item.birth.toISOString()}
                    key={item.id}
                  />
                ))
            }
          </tbody>
        </table>

      </div>
    </div>
  );
}

function ExpensiveItem(props) {
  return (
    <div className="mb-2">
      <div>{props.items.title}</div>
      <div>{props.items.date.toISOString()}</div>
      <div>${props.items.amount}</div>
    </div>
  );
}

export default App;
