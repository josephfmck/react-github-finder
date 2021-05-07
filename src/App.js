//* import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
//main css for every component
import "./App.css";

//*MAIN APP COMPONENT is render through #root
//*For class to work need to extend with React component

class App extends Component {
  //* Method as part of the class, have to use 'this'
  foo2 = () => "bar2";

  render() {
    //* Can add JS with {}
    const name = "John Doe";

    const foo = () => "bar";

    //* conditional, ex. API data
    const loading = false;
    //?messy conditional
    // if (loading) {
    //   return (
    //     <h4>
    //       Conditional outside of main return(): returns ONLY this h4, Loading...
    //       true.
    //     </h4>
    //   );
    // }

    return (
      <div className='App'>
        <h1>
          Hello {foo()} {this.foo2()} {}
        </h1>
        <p>
          Var declared outside return(): {name.toUpperCase()} {1 + 1}
        </p>
        <p>Function declared outside return(): {foo()}</p>
        <p>Class Method declared outside render(): {this.foo2()} </p>
      </div>
    );
  }
}

export default App;
