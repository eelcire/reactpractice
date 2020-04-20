import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('http://jsonplaceholder.typicode.com/photos');

      setData(res.data);
    };
    fetchData();
  }, []);

  const renderData = !data
    ? null
    : data.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.albumId}</td>
            <td>{item.title}</td>
            <td>
              <a href={item.url}>Click Me!</a>
            </td>
            <td>
              <img src={item.thumbnailUrl}></img>
            </td>
          </tr>
        );
      });

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Album ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
    </div>
  );
}

export default App;
