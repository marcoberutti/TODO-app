import './App.css';
// import Lezione from './lezione/Lezione';
import Esercizio from './esercizio/Esercizio';

let taskList = [
  {
  id:1,
  nome: 'spesa1',
  completed: false
  },
  {
  id:2,
  nome: 'spesa2',
  completed: false
  }
]

function App() {

  return (
    <div className="App">
      {/* <Lezione /> */}
      <div className="mainContainer">
        <h2>I miei task</h2>
          <div className="subContainer">
            <Esercizio tasks={taskList}/>
          </div>
        </div>
    </div>
  );
}

export default App;
