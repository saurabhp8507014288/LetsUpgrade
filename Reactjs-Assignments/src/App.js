import icon from './icon.png';
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header />
        <img src={icon} className="App-logo" alt="logo" />

        <Footer />
      </header>
    </div>
  );
}

export default App;
