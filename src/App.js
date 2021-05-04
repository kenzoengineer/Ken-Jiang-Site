import './App.css';
import Header from './Header/Header';
import Description from './Description/Description';
import Experience from './Experience/Experience';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <Description/>
      <Experience/>
    </div>
  );
}

export default App;
