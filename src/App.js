//logo img
import logo from "./logo.svg";
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
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
