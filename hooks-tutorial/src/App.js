import './App.css';
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Info from "./Info";
import React, {useState} from "react";
import Info2 from "./Info2";
import Average from "./Average";
import RefSample from "./RefSample";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
      <div>
        <button onClick={ () => {
          setVisible(!visible);
        }}>
            {visible ? '숨기가' : '보이기'}
        </button>
          <hr />
          { visible && <Info /> }
      </div>
      );

  // return <Counter />;
  // return <Counter2/>;
  // return <Info2 />;
  // return <Average />;
  // return <RefSample />;
}

export default App;
