// import logo from './logo.svg';
// import { Button } from '@mui/material';
// import TemporaryDrawer from './components/example1';
import ExampleComponent from './components/example2';
import './App.css';

function App() {

  const popupMethod = (data) => {
    console.log(data, '****')
    let demo = 'ddddd';
    return alert(`hello world ${data} ${demo} name`);
  }

  return (
    <div className="App" >
      {/* <header className="App-header">
        <TemporaryDrawer />
        <p style={{ color: 'red', textAlign: 'center' }}>test</p>

        <Button variant="contained" id='btn_custom' className='btn_custom' onClick={() => window.location.reload()}>Contained</Button>

      </header> */}
      <ExampleComponent value={'world'} name='test' newMethod={popupMethod}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ border: '1px solid red', padding: '1rem' }}></div>
          <div style={{ border: '1px solid red', padding: '1rem' }}></div>
          <div style={{ border: '1px solid red', padding: '1rem' }}></div>
        </div>
      </ExampleComponent>
      {/* <ExampleComponent value={'world 1'} name='test 1' >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ border: '1px solid red', padding: '1rem' }}></div>
          <div style={{ border: '1px solid red', padding: '1rem' }}></div>
        </div>
      </ExampleComponent>
      <ExampleComponent value={'world 2'} name='test 2' />
      <ExampleComponent value={'world 3'} name='test 3' /> */}
    </div>
  );
}

export default App;