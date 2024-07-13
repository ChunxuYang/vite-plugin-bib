import "./App.css";

import bib from "./assets/test.bib";
import bibText from "./assets/test.bib?raw";

function App() {
  return (
    <main className="container">
      <h2>Formatted BibTeX</h2>
      <p>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Type</th>
              <th>Author</th>
              <th>Title</th>
              <th>Other Fields</th>
            </tr>
          </thead>
          <tbody>
            {bib.map(({ id, type, author, title, ...other }, index) => (
              <tr key={index}>
                <td>{id}</td>
                <td>{type}</td>
                <td>{author}</td>
                <td>{title}</td>
                <td>
                  <ul>
                    {Object.entries(other).map(([key, value], index) => (
                      <li key={index} style={{ fontSize: "0.8rem" }}>
                        <b>{key}</b>: {value?.toString()}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </p>
      <h2>Raw BibTeX</h2>
      <p>
        <pre>
          <code>{bibText}</code>
        </pre>
      </p>
    </main>
  );
}

export default App;
