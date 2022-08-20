import './App.css';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Router from './route/Router';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
