// import logo from './logo.svg';
// import { Button } from '@mui/material';
// import TemporaryDrawer from './components/example1';
import ExampleComponent from './components/example2';
import ExampleComponent2 from './components/example3';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import NavigationComponent from './components/Navigation';

function App() {

  const popupMethod = (data) => {
    console.log(data, '****')
    let demo = 'ddddd';
    return alert(`hello world ${data} ${demo} name`);
  }

  return (
    <div className="App" >
      {/* <ExampleComponent value={'world'} name='test' newMethod={popupMethod} />
      <ExampleComponent2 value={'world'} name='test' newMethod={popupMethod} /> */}
      <NavigationComponent />
      <Routes>
        <Route exact path="/" element={<ExampleComponent />} />
        <Route exact path="/about" element={<ExampleComponent2 />} />
        {/* <Route exact path="/contacts" element={<ExampleComponent />} /> */}
        <Route exact path="/services" element={<ExampleComponent2 />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;