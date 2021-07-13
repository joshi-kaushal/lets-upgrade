import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button buttonText='First Button' backgroundColor='aliceblue'/>
      <Button buttonText='Second Button' backgroundColor='beige'/>
      <Button buttonText='Third Button' backgroundColor='antiquewhite'/>
    </div>
  );
}

export default App;
