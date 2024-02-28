import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './views/Home';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
