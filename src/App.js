import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='flex-grid'>
        <Header />
        <Nav />
      </div>
      <div className='flex-grid'>
        <Main />
      </div>
      <div className='flex-grid'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
