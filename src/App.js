import React from 'react';
import Start from './Start';
import './App.css';
import {Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Score from './Score';
import Quiz from './Quiz';
import Message from './Message';
import Ranking from './Ranking';
import Spinner from './Spinner';

function App() {
  const [name, setName] = React.useState("아롱이");
  const is_loaded  = useSelector((state) => state.rank.is_loaded);

  return (
    <div className="App" style={{
      maxWidth: "350px",
      margin: "auto"
    }}>
     {!is_loaded && <Spinner />}
     <Route path ="/" exact>
       <Start name={name}/>
     </Route>

     <Route path="/quiz" exact>
       <Quiz/>
     </Route>

     <Route path="/score" exact>
       <Score name={name}/>
     </Route>

     <Route path="/message" exact>
       <Message name={name}/>
     </Route>

     <Route path="/ranking" exact>
       <Ranking/>
     </Route>
    </div>
  );
}

export default App;
