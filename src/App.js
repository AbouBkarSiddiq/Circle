
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <h1>Hello Northbridge</h1>
      <button className='btn btn-primary btn-lg'> Guru </button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Dropdown
      </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <a class="dropdown-item" href="#!">Action</a>
          <a class="dropdown-item" href="#!">Another action</a>
        </div>
      </div>
      <div class="alert alert-success" role="alert">
        <strong>Well done!</strong> You successfully read this
        important alert message.
      </div>
    </div>
  );
}

export default App;
