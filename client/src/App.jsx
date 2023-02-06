import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <main>
        <container className="mt-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </container>
      </main>
    </BrowserRouter>
  );
}

export default App;
