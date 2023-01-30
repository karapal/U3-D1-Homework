import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ImageComponent
          imageSource="https://placekitten.com/250"
          altContent="Image"
        />
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent>

        </ButtonComponent>
      </header>
    </div>
  );
}

export default App;
