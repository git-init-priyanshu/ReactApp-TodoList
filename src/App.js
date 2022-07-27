import './App.css';
import Navbar from './My Components/Navbar';
import Todo from './My Components/Todo';
import Body from './My Components/Body';

function App() {

  let todoList = [
    "Finish this project",
    "Learn React.js",
    "Finish WebD project"
  ]

  return (
    <>
      <Navbar/>
      <Body/>
      {todoList.map((i) => {
        return (<Todo index={i}/>)
      })}
    </>
  );
}

export default App;
