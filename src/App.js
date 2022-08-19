import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Header></Header>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
