import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';
import Home from './components/home/Home';
import Quote from './components/quote/Quote';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
