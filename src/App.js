import React from 'react';
import Start from './Start';
import './App.css';
import {Route} from 'react-router-dom';
import Score from './Score';
import Quiz from './Quiz';

function App() {
  const [name, setName] = React.useState("아롱이");

  return (
    <div className="App" style={{
      maxWidth: "350px",
      margin: "auto"
    }}>
      <Route path ="/" exact>
     <Start name={name}/>
     </Route>

     <Route path="/quiz" exact>
       <Quiz/>
     </Route>

     <Route path="/score" exact>
       <Score name={name}/>
     </Route>
    </div>
  );
}

export default App;
