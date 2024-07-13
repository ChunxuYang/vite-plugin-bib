import './style.css';

import testBib from './assets/test.bib';

console.log("test", testBib);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Test Bib</h1>
    <pre>
    <code>
      ${JSON.stringify(testBib, null, 2)}
      </code>
    </pre>
  </div>
`;
