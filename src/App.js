import './App.css';
import Navbar from './Navbar/Navbar'
import Header from './Header/Header';
import Description from './Description/Description';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import ThemeSwap from './ThemeSwap/ThemeSwap';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ThemeSwap></ThemeSwap>
      <header className="App-header">
        <Header/>
      </header>
      <Description/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
