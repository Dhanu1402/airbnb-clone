import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';

function App() {
  return (
    <BrowserRouter>
      <main>
        <container className="mt-3">
          <Routes>
            <Route index element={<Index />} />
          </Routes>
        </container>
      </main>
    </BrowserRouter>
  );
}

export default App;
