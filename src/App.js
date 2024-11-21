import './App.css';
// import Lezione from './lezione/Lezione';
import Esercizio from './esercizio/Esercizio';

function App({taskList}) {
  return (
    <div className="App">
      {/* <Lezione /> */}
      <div className="mainContainer">
        <h2>I miei task</h2>
          <div className="subContainer">
            <Esercizio taskList={taskList}/>
          </div>
        </div>
    </div>
  );
}

export default App;
