import './App.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Add from './component/Add';
import View from './component/View';
import Edit from './component/Edit';
import Delete from './component/Delete';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add/>} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/delete/:id" element={<Delete/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
