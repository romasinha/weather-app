import React from 'react';
const api = {
  key: "fc71041f24876b8b478fbe3ae1160ac5",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  return (
    <div className="app warm">
      <main>
        <div className = "search-box">
          <input type= "text" className= "search-bar" placeholder= "Search.."></input>
        </div>

      </main>
    </div>
  );
}

export default App;
