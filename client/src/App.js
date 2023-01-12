import './App.css';
import {Routes, Route} from 'react-router-dom';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import DescBook from './pages/DescBook';

function App() {
  return (
    <div className="App divApp">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          <Route path="/desc/:id" element={<DescBook />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
