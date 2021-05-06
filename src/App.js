//main css for every component
import "./App.css";

//MAIN APP COMPONENT is render through #root
//Components can be functions (like here) OR Classes
//Class component: can have state
//function component: need hooks for state
function App() {
  //class for JS, className for JSX
  return (
    <div className='App'>
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;
