import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://jsonplaceholder.typicode.com/todos');

      setData(res.data);
    };
    fetchData();
  }, []);

  console.log(data);

  const renderData = !data
    ? null
    : data.map((item) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        );
      });

  return (
    <div className="App">
      <table>
        <thead>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Completed</th>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
    </div>
  );
}

export default App;
