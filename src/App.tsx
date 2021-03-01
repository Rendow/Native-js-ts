import React from 'react';
import './App.css';


function App() {

    const names = ['Andrey','Alexander','Alexander','Alexander','Alexander']
    const users = [{name: 'Andrey'}, {name:'Alexander'}, {name:'Alexander'}]


    const liElements = users.map ( n => <li>{n.name}</li>)

  return (

      <div>
          {liElements}
      </div>

  );
}

export default App;
